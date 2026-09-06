-- Add optional SEO overrides while preserving existing title/excerpt fallbacks.
ALTER TABLE `BlogPost`
  ADD COLUMN `metaTitle` VARCHAR(255) NULL,
  ADD COLUMN `metaDescription` TEXT NULL;

ALTER TABLE `CaseStudy`
  ADD COLUMN `metaTitle` VARCHAR(255) NULL,
  ADD COLUMN `metaDescription` TEXT NULL;
