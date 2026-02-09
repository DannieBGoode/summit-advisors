# Summit Advisors Website

Jekyll-based multilingual marketing site for Summit Advisors, deployed on Netlify.

## Tech Stack

- Jekyll `~> 4.4` (Ruby static site generator)
- Ruby `3.2.2` (from `.ruby-version`)
- Bundler (lockfile generated with `2.3.8`)
- Decap CMS at `/admin` (Git Gateway backend)
- Netlify for hosting/deploys and form handling

## Project Structure (important folders)

- `_pages/` : main pages per language (`es`, `en`, `cat`)
- `_es_posts/`, `_en_posts/`, `_cat_posts/` : blog posts per language
- `_projects/` : service/project entries
- `_data/` : editable structured content
- `_includes/`, `_layouts/`, `_sass/` : templates and styles
- `admin/` : Decap CMS config and admin app
- `_site/` : generated output (build artifact)

## Prerequisites

1. Install Ruby `3.2.2`.
2. Install Bundler if missing:

```bash
gem install bundler
```

## Install Dependencies

From the project root:

```bash
bundle install
```

## Local Development

Run the site locally:

```bash
bundle exec jekyll serve
```

Default local URL:

- `http://127.0.0.1:4000`

Live reload is enabled by default with `jekyll serve`.

## Build Commands

Build static output into `_site/`:

```bash
bundle exec jekyll build
```

Clean generated artifacts:

```bash
bundle exec jekyll clean
```

Production-style build (optional):

```bash
$env:JEKYLL_ENV="production"; bundle exec jekyll build
```

Netlify also builds this project into `_site/`. If your Netlify UI currently shows `bundle exec jekyll builde`, correct it to:

```bash
bundle exec jekyll build
```

## Deployment (Netlify)

This repo is designed to be deployed on Netlify.

- Domain and redirect rules are defined in `netlify.toml`.
- Redirects enforce canonical HTTPS host (`https://summitadvisors.ad`).
- Publish directory should be `_site`.

## Contact Form (Netlify Forms)

The contact form in `_includes/contact-box.html` uses Netlify Forms (`<form name="contact" netlify>`).

Where to manage submissions:

- Netlify Dashboard -> Site -> Forms

Official docs:

- https://docs.netlify.com/forms/setup/

## CMS (Decap CMS)

This project uses **Decap CMS** (formerly Netlify CMS).

- Admin URL: `/admin` (for example `https://summitadvisors.ad/admin`)
- Config file: `admin/config.yml`
- Backend: `git-gateway` (Netlify Identity + Git Gateway)
- Local CMS backend is enabled (`local_backend: true`)

Official docs:

- https://decapcms.org/docs/intro/
- https://docs.netlify.com/security/secure-access-to-sites/identity/

## Admin Login (Netlify Identity)

To log in to CMS in production:

1. Open `/admin`.
2. Use Netlify Identity credentials.
3. Netlify Identity must be enabled in the Netlify site settings.
4. The user must be invited/authorized in Netlify Identity.

If login is enabled but publishing fails, verify Git Gateway is enabled in Netlify.

## Content Editing Notes

- `future: true` is enabled in `_config.yml`, so future-dated posts can be published.
- Multilingual content relies on language-specific collections and folders.
- Most editable global/site copy lives in `_data/*.yml` and CMS collections in `admin/config.yml`.

## Troubleshooting

- If `bundle install` fails: verify Ruby version matches `.ruby-version` (`3.2.2`).
- If `jekyll serve` fails with dependency errors: run `bundle install` again.
- If CMS does not load at `/admin`: confirm `admin/index.html` and `admin/config.yml` are present in deployed output.
- If CMS authentication fails: check Netlify Identity and Git Gateway settings.

## Useful References

- Jekyll docs: https://jekyllrb.com/docs/
- Netlify docs: https://docs.netlify.com/
- Decap CMS docs: https://decapcms.org/docs/intro/
