#!/bin/sh

cd /home/jan/projects/uzh/ddos-visualization

git fetch

UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")
BASE=$(git merge-base @ "$UPSTREAM")

if [ $LOCAL = $REMOTE ]; then
    echo "Up-to-date"
elif [ $LOCAL = $BASE ]; then
    echo "Need to pull"
    pkill node;
    git pull;
    cd api; node index.js;

elif [ $REMOTE = $BASE ]; then
    echo "Need to push"
else
    echo "Diverged"
fi

# How to use in cron e.g. every 5 mins
echo "crontab -e"
echo "*/5 * * * * $(pwd)/restart_on_pull.sh"
