# washingtoncie.github.io
Website for the Washington Center for International Education

## Testing
1. Download and install Ruby
2. Install the bundler gem: `gem install bundler`
3. Navigate to this project's folder and run `bundle install`
4. Test the website locally by running `bundle exec jekyll serve --livereload`
5. Go to the URL it gives you in the console to see the built website. (Normally `localhost:4000`)

## Updating your fork
1. Add original source as a fork: `git remote add upstream https://github.com/washingtoncie/washingtoncie.github.io.git`
2. Fetch new commits from original source: `git fetch upstream main`
3. Changes your commits to reflect the original source: `git rebase upstream/main`
4. Force push new changes to your fork: `git push -f`
