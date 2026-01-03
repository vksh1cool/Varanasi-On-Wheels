/**
 * Unit Tests for robots.txt
 * Feature: blog-seo-optimization
 * 
 * These tests verify that the robots.txt file is properly configured
 * for search engines and LLM crawlers.
 */

import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

describe('robots.txt Tests', () => {
  const robotsTxtPath = join(process.cwd(), 'public', 'robots.txt');
  let robotsTxtContent: string;

  describe('File Existence and Accessibility', () => {
    /**
     * Validates: Requirements 2.1
     */
    it('should exist in the public directory', () => {
      expect(existsSync(robotsTxtPath), 'robots.txt file does not exist in public/ directory').toBe(true);
    });

    it('should be readable', () => {
      expect(() => {
        robotsTxtContent = readFileSync(robotsTxtPath, 'utf-8');
      }).not.toThrow();
    });
  });

  describe('Content Validation', () => {
    beforeAll(() => {
      robotsTxtContent = readFileSync(robotsTxtPath, 'utf-8');
    });

    /**
     * Validates: Requirements 2.1
     */
    it('should contain User-agent: * directive', () => {
      expect(robotsTxtContent).toContain('User-agent: *');
    });

    it('should contain Allow: / directive for default user-agent', () => {
      const lines = robotsTxtContent.split('\n');
      let foundUserAgentAll = false;
      let foundAllowRoot = false;

      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === 'User-agent: *') {
          foundUserAgentAll = true;
          // Check if Allow: / appears after User-agent: *
          for (let j = i + 1; j < lines.length; j++) {
            if (lines[j].trim().startsWith('User-agent:')) break;
            if (lines[j].trim() === 'Allow: /') {
              foundAllowRoot = true;
              break;
            }
          }
        }
      }

      expect(foundUserAgentAll, 'User-agent: * not found').toBe(true);
      expect(foundAllowRoot, 'Allow: / not found after User-agent: *').toBe(true);
    });

    /**
     * Validates: Requirements 2.2
     */
    it('should contain Sitemap directive with valid URL', () => {
      expect(robotsTxtContent).toMatch(/Sitemap:\s*https?:\/\/.+/i);
      expect(robotsTxtContent).toContain('varanasionwheels.com/sitemap.xml');
    });

    /**
     * Validates: Requirements 2.3, 5.3
     */
    it('should include directives for major LLM crawlers', () => {
      const requiredLLMCrawlers = [
        'GPTBot',
        'Google-Extended',
        'CCBot',
        'anthropic-ai',
        'Claude-Web'
      ];

      requiredLLMCrawlers.forEach(crawler => {
        expect(robotsTxtContent, `Missing user-agent directive for ${crawler}`).toContain(`User-agent: ${crawler}`);
      });
    });

    it('should allow access for all LLM crawlers', () => {
      const llmCrawlers = ['GPTBot', 'Google-Extended', 'CCBot', 'anthropic-ai', 'Claude-Web'];
      const lines = robotsTxtContent.split('\n');

      llmCrawlers.forEach(crawler => {
        let foundCrawler = false;
        let foundAllow = false;

        for (let i = 0; i < lines.length; i++) {
          if (lines[i].trim() === `User-agent: ${crawler}`) {
            foundCrawler = true;
            // Check if Allow: / appears after this user-agent
            for (let j = i + 1; j < lines.length; j++) {
              if (lines[j].trim().startsWith('User-agent:')) break;
              if (lines[j].trim() === 'Allow: /') {
                foundAllow = true;
                break;
              }
            }
          }
        }

        expect(foundCrawler, `User-agent ${crawler} not found`).toBe(true);
        expect(foundAllow, `Allow: / not found for ${crawler}`).toBe(true);
      });
    });

    /**
     * Validates: Requirements 2.4
     */
    it('should disallow crawling of administrative and build directories', () => {
      const requiredDisallows = [
        '/.next/',
        '/api/',
        '/_next/',
        '/node_modules/'
      ];

      requiredDisallows.forEach(path => {
        expect(robotsTxtContent, `Missing Disallow directive for ${path}`).toContain(`Disallow: ${path}`);
      });
    });

    /**
     * Validates: Requirements 2.5
     */
    it('should contain Crawl-delay directive', () => {
      expect(robotsTxtContent).toMatch(/Crawl-delay:\s*\d+/i);
    });

    /**
     * Validates: Requirements 5.1, 5.2
     */
    it('should not disallow blog, vehicles, or tours paths', () => {
      expect(robotsTxtContent).not.toContain('Disallow: /blog');
      expect(robotsTxtContent).not.toContain('Disallow: /vehicles');
      expect(robotsTxtContent).not.toContain('Disallow: /tours');
    });
  });

  describe('Syntax Validation', () => {
    beforeAll(() => {
      robotsTxtContent = readFileSync(robotsTxtPath, 'utf-8');
    });

    /**
     * Validates: Requirements 5.5
     */
    it('should follow robots.txt specification format', () => {
      const lines = robotsTxtContent.split('\n');

      lines.forEach((line, index) => {
        const trimmedLine = line.trim();
        
        // Skip empty lines and comments
        if (trimmedLine === '' || trimmedLine.startsWith('#')) {
          return;
        }

        // Check that non-empty, non-comment lines follow the format
        const validDirectives = [
          'User-agent:',
          'Allow:',
          'Disallow:',
          'Sitemap:',
          'Crawl-delay:'
        ];

        const isValidDirective = validDirectives.some(directive => 
          trimmedLine.startsWith(directive)
        );

        expect(isValidDirective, `Line ${index + 1} has invalid format: "${trimmedLine}"`).toBe(true);
      });
    });

    it('should have proper directive formatting', () => {
      const lines = robotsTxtContent.split('\n');

      lines.forEach((line, index) => {
        const trimmedLine = line.trim();
        
        // Skip empty lines and comments
        if (trimmedLine === '' || trimmedLine.startsWith('#')) {
          return;
        }

        // Check that directives have proper format (directive: value)
        if (trimmedLine.includes(':')) {
          const parts = trimmedLine.split(':');
          expect(parts.length, `Line ${index + 1} has improper format: "${trimmedLine}"`).toBeGreaterThanOrEqual(2);
          
          // Check that there's content after the colon (even if it's just whitespace)
          const directive = parts[0].trim();
          const value = parts.slice(1).join(':').trim();
          
          expect(directive.length, `Line ${index + 1} has empty directive`).toBeGreaterThan(0);
          // Value can be empty for some directives, but the colon should be present
        }
      });
    });

    it('should not have syntax errors', () => {
      // Check for common syntax errors
      expect(robotsTxtContent).not.toMatch(/User-agent\s*:\s*:\s*/); // Double colons
      expect(robotsTxtContent).not.toMatch(/Allow\s*:\s*:\s*/);
      expect(robotsTxtContent).not.toMatch(/Disallow\s*:\s*:\s*/);
      
      // Check that directives are not misspelled
      const lines = robotsTxtContent.split('\n');
      const validDirectiveStarts = ['User-agent:', 'Allow:', 'Disallow:', 'Sitemap:', 'Crawl-delay:', '#', ''];
      
      lines.forEach((line, index) => {
        const trimmedLine = line.trim();
        if (trimmedLine === '') return;
        
        const isValid = validDirectiveStarts.some(directive => 
          trimmedLine.startsWith(directive)
        );
        
        expect(isValid, `Line ${index + 1} may have a syntax error: "${trimmedLine}"`).toBe(true);
      });
    });
  });
});
