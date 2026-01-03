/**
 * Property-Based Tests for Blog Posts
 * Feature: blog-seo-optimization
 * 
 * These tests verify that all blog posts meet the correctness properties
 * defined in the design document.
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { blogs } from '../data/blogs';

// Helper function to strip HTML tags and count words
function stripHtmlAndCountWords(html: string): number {
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text.split(' ').filter(word => word.length > 0);
  return words.length;
}

// Helper function to calculate keyword density
function calculateKeywordDensity(content: string, keyword: string): number {
  const text = content.replace(/<[^>]*>/g, ' ').toLowerCase();
  const words = text.split(/\s+/).filter(word => word.length > 0);
  const totalWords = words.length;
  
  // Count occurrences of the keyword (case-insensitive, whole word matches)
  const keywordLower = keyword.toLowerCase();
  const keywordWords = keywordLower.split(/\s+/);
  
  let count = 0;
  for (let i = 0; i <= words.length - keywordWords.length; i++) {
    let match = true;
    for (let j = 0; j < keywordWords.length; j++) {
      if (!words[i + j].includes(keywordWords[j])) {
        match = false;
        break;
      }
    }
    if (match) count++;
  }
  
  return totalWords > 0 ? (count / totalWords) * 100 : 0;
}

// Helper function to check HTML heading structure
function hasProperHeadingStructure(html: string): boolean {
  const h2Matches = html.match(/<h2[^>]*>/g);
  const h3Matches = html.match(/<h3[^>]*>/g);
  
  // Must have at least one h2
  if (!h2Matches || h2Matches.length === 0) {
    return false;
  }
  
  // Check that h2 appears before h3 (if h3 exists)
  if (h3Matches && h3Matches.length > 0) {
    const firstH2Index = html.indexOf('<h2');
    const firstH3Index = html.indexOf('<h3');
    if (firstH3Index < firstH2Index) {
      return false;
    }
  }
  
  return true;
}

// Helper function to check for service references
function hasServiceReferences(content: string): boolean {
  const vehicleKeywords = [
    'innova', 'crysta', 'urbania', 'tempo traveller', 'tempo', 
    'swift', 'dzire', 'ertiga', 'bus', 'maharaja'
  ];
  
  const tourKeywords = [
    'tour', 'package', 'circuit', 'pilgrimage', 'local tour',
    'buddhist circuit', 'ramayana circuit', 'jain circuit'
  ];
  
  const contentLower = content.toLowerCase();
  
  const hasVehicle = vehicleKeywords.some(keyword => contentLower.includes(keyword));
  const hasTour = tourKeywords.some(keyword => contentLower.includes(keyword));
  
  return hasVehicle || hasTour;
}

// Helper function to count location keywords
function countLocationKeywords(content: string): number {
  const locationKeywords = [
    'varanasi', 'uttar pradesh', 'kashi', 'banaras', 'benares',
    'ganga', 'ganges', 'ghat', 'dashashwamedh', 'assi', 'manikarnika',
    'vishwanath', 'sarnath', 'bhu'
  ];
  
  const contentLower = content.toLowerCase();
  let count = 0;
  
  for (const keyword of locationKeywords) {
    const regex = new RegExp(keyword, 'gi');
    const matches = contentLower.match(regex);
    if (matches) {
      count += matches.length;
    }
  }
  
  return count;
}

// Helper function to check for keyword semantic variations
function hasSemanticVariations(content: string, primaryKeyword: string): number {
  const contentLower = content.toLowerCase();
  
  // Define semantic variations for common keywords
  const semanticMap: Record<string, string[]> = {
    'travel': ['journey', 'trip', 'tour', 'visit', 'explore'],
    'monsoon': ['rainy season', 'rain', 'rainfall', 'wet season'],
    'pilgrimage': ['spiritual journey', 'sacred trip', 'holy visit', 'devotional tour'],
    'hill station': ['mountain', 'hills', 'highland', 'mountain retreat'],
  };
  
  let variationCount = 0;
  
  // Check for variations of words in the primary keyword
  for (const [base, variations] of Object.entries(semanticMap)) {
    if (primaryKeyword.toLowerCase().includes(base)) {
      for (const variation of variations) {
        if (contentLower.includes(variation)) {
          variationCount++;
        }
      }
    }
  }
  
  return variationCount;
}

// Helper function to count major sections
function countMajorSections(html: string): number {
  const h2Matches = html.match(/<h2[^>]*>/g);
  return h2Matches ? h2Matches.length : 0;
}

// Helper function to check for proper list markup
function hasProperListMarkup(html: string): boolean {
  // Check if there are list-like patterns (3+ consecutive items)
  const hasLists = html.includes('<ul>') || html.includes('<ol>');
  
  // If there are lists, they should be properly marked up
  if (hasLists) {
    const ulMatches = html.match(/<ul[^>]*>[\s\S]*?<\/ul>/g);
    const olMatches = html.match(/<ol[^>]*>[\s\S]*?<\/ol>/g);
    return (ulMatches && ulMatches.length > 0) || (olMatches && olMatches.length > 0);
  }
  
  return true; // No lists, so no issue
}

// Helper function to check for CTA in final section
function hasCallToActionInFinalSection(content: string): boolean {
  const contentLength = content.length;
  const finalSection = content.substring(Math.floor(contentLength * 0.8));
  
  const ctaKeywords = ['book', 'contact', 'call', 'reserve', 'visit', 'explore', 'discover'];
  const finalSectionLower = finalSection.toLowerCase();
  
  return ctaKeywords.some(keyword => finalSectionLower.includes(keyword));
}

describe('Blog Post Property Tests', () => {
  // Get the three new blog posts
  const newBlogs = blogs.filter(blog => 
    ['monsoon-magic-varanasi', 'winter-pilgrimage-varanasi', 'summer-escapes-varanasi'].includes(blog.id)
  );

  describe('Property 1: Minimum word count requirement', () => {
    /**
     * Feature: blog-seo-optimization, Property 1: Minimum word count requirement
     * Validates: Requirements 1.2
     */
    it('should have at least 800 words in content for all new blog posts', () => {
      newBlogs.forEach(blog => {
        const wordCount = stripHtmlAndCountWords(blog.content);
        expect(wordCount, `Blog "${blog.title}" has ${wordCount} words, expected at least 800`).toBeGreaterThanOrEqual(800);
      });
    });
  });

  describe('Property 2: Keyword density within acceptable range', () => {
    /**
     * Feature: blog-seo-optimization, Property 2: Keyword density within acceptable range
     * Validates: Requirements 1.3
     */
    it('should have keyword density between 2% and 3% for primary keywords', () => {
      const keywordMap: Record<string, string> = {
        'monsoon-magic-varanasi': 'varanasi monsoon',
        'winter-pilgrimage-varanasi': 'varanasi winter',
        'summer-escapes-varanasi': 'varanasi'
      };

      newBlogs.forEach(blog => {
        const primaryKeyword = keywordMap[blog.id];
        if (primaryKeyword) {
          const density = calculateKeywordDensity(blog.content, primaryKeyword);
          expect(density, `Blog "${blog.title}" has keyword density of ${density.toFixed(2)}%, expected 2-3%`).toBeGreaterThanOrEqual(2);
          expect(density, `Blog "${blog.title}" has keyword density of ${density.toFixed(2)}%, expected 2-3%`).toBeLessThanOrEqual(3);
        }
      });
    });
  });

  describe('Property 3: Proper HTML heading structure', () => {
    /**
     * Feature: blog-seo-optimization, Property 3: Proper HTML heading structure
     * Validates: Requirements 1.5
     */
    it('should have proper HTML heading structure with at least one h2', () => {
      newBlogs.forEach(blog => {
        const hasProperStructure = hasProperHeadingStructure(blog.content);
        expect(hasProperStructure, `Blog "${blog.title}" does not have proper heading structure`).toBe(true);
      });
    });
  });

  describe('Property 4: Service references in content', () => {
    /**
     * Feature: blog-seo-optimization, Property 4: Service references in content
     * Validates: Requirements 3.5
     */
    it('should reference at least one vehicle type or tour package', () => {
      newBlogs.forEach(blog => {
        const hasReferences = hasServiceReferences(blog.content);
        expect(hasReferences, `Blog "${blog.title}" does not reference any services`).toBe(true);
      });
    });
  });

  describe('Property 5: Meta description length compliance', () => {
    /**
     * Feature: blog-seo-optimization, Property 5: Meta description length compliance
     * Validates: Requirements 4.1
     */
    it('should have excerpt between 150 and 160 characters', () => {
      newBlogs.forEach(blog => {
        const excerptLength = blog.excerpt.length;
        expect(excerptLength, `Blog "${blog.title}" has excerpt of ${excerptLength} chars, expected 150-160`).toBeGreaterThanOrEqual(150);
        expect(excerptLength, `Blog "${blog.title}" has excerpt of ${excerptLength} chars, expected 150-160`).toBeLessThanOrEqual(160);
      });
    });
  });

  describe('Property 6: Vehicle fleet references', () => {
    /**
     * Feature: blog-seo-optimization, Property 6: Vehicle fleet references
     * Validates: Requirements 4.2
     */
    it('should mention at least one vehicle name from the fleet', () => {
      newBlogs.forEach(blog => {
        const contentLower = blog.content.toLowerCase();
        const vehicleNames = [
          'innova crysta', 'urbania', 'tempo traveller', 'swift dzire', 
          'ertiga', 'luxury bus', 'maharaja tempo'
        ];
        
        const hasVehicle = vehicleNames.some(vehicle => contentLower.includes(vehicle));
        expect(hasVehicle, `Blog "${blog.title}" does not mention any specific vehicles`).toBe(true);
      });
    });
  });

  describe('Property 7: Tour package references', () => {
    /**
     * Feature: blog-seo-optimization, Property 7: Tour package references
     * Validates: Requirements 4.3
     */
    it('should reference at least one tour package', () => {
      newBlogs.forEach(blog => {
        const contentLower = blog.content.toLowerCase();
        const tourPackages = [
          'local tour', 'buddhist circuit', 'ramayana circuit', 
          'jain circuit', 'pilgrimage', 'tour package'
        ];
        
        const hasTour = tourPackages.some(tour => contentLower.includes(tour));
        expect(hasTour, `Blog "${blog.title}" does not reference any tour packages`).toBe(true);
      });
    });
  });

  describe('Property 8: Location keyword presence', () => {
    /**
     * Feature: blog-seo-optimization, Property 8: Location keyword presence
     * Validates: Requirements 4.4
     */
    it('should include location keywords at least 5 times', () => {
      newBlogs.forEach(blog => {
        const locationCount = countLocationKeywords(blog.content);
        expect(locationCount, `Blog "${blog.title}" has ${locationCount} location keywords, expected at least 5`).toBeGreaterThanOrEqual(5);
      });
    });
  });

  describe('Property 9: Keyword semantic variations', () => {
    /**
     * Feature: blog-seo-optimization, Property 9: Keyword semantic variations
     * Validates: Requirements 4.5
     */
    it('should include at least 2 semantic variations of primary keywords', () => {
      const keywordMap: Record<string, string> = {
        'monsoon-magic-varanasi': 'monsoon travel',
        'winter-pilgrimage-varanasi': 'pilgrimage',
        'summer-escapes-varanasi': 'travel'
      };

      newBlogs.forEach(blog => {
        const primaryKeyword = keywordMap[blog.id];
        if (primaryKeyword) {
          const variationCount = hasSemanticVariations(blog.content, primaryKeyword);
          expect(variationCount, `Blog "${blog.title}" has ${variationCount} semantic variations, expected at least 2`).toBeGreaterThanOrEqual(2);
        }
      });
    });
  });

  describe('Property 10: Content sectioning structure', () => {
    /**
     * Feature: blog-seo-optimization, Property 10: Content sectioning structure
     * Validates: Requirements 6.1
     */
    it('should have at least 3 major sections (h2 headings)', () => {
      newBlogs.forEach(blog => {
        const sectionCount = countMajorSections(blog.content);
        expect(sectionCount, `Blog "${blog.title}" has ${sectionCount} sections, expected at least 3`).toBeGreaterThanOrEqual(3);
      });
    });
  });

  describe('Property 11: Proper list markup', () => {
    /**
     * Feature: blog-seo-optimization, Property 11: Proper list markup
     * Validates: Requirements 6.2
     */
    it('should use proper HTML list elements for list content', () => {
      newBlogs.forEach(blog => {
        const hasProperLists = hasProperListMarkup(blog.content);
        expect(hasProperLists, `Blog "${blog.title}" does not have proper list markup`).toBe(true);
      });
    });
  });

  describe('Property 12: Call-to-action presence', () => {
    /**
     * Feature: blog-seo-optimization, Property 12: Call-to-action presence
     * Validates: Requirements 6.5
     */
    it('should include call-to-action in the final 20% of content', () => {
      newBlogs.forEach(blog => {
        const hasCTA = hasCallToActionInFinalSection(blog.content);
        expect(hasCTA, `Blog "${blog.title}" does not have a clear call-to-action in the final section`).toBe(true);
      });
    });
  });
});
