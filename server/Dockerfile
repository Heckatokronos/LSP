# syntax=docker/dockerfile:1
FROM ruby:3.1.2
RUN apt-get update && \
    apt-get install -y \
    build-essential \
    nodejs \
    postgresql-client && \
    rm -rf /var/lib/apt/lists/*
WORKDIR /server
COPY Gemfile /server/Gemfile
COPY Gemfile.lock /server/Gemfile.lock
RUN bundle install

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]
