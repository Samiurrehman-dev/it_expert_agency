-- Extend ebooks with optional landing-page content, SEO metadata, and PDF storage.
ALTER TABLE `Ebook`
  ADD COLUMN `body` JSON NULL,
  ADD COLUMN `metaTitle` VARCHAR(255) NULL,
  ADD COLUMN `metaDescription` TEXT NULL,
  ADD COLUMN `promotionalDescription` TEXT NULL,
  ADD COLUMN `fileUrl` VARCHAR(500) NULL;
