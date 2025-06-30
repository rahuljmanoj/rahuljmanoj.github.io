---
layout: page
title: news
description: "Here you will find all past updates and announcements."
permalink: /news/
nav: true
nav_order: 8
pagination:
  enabled: true
  collection: news
  permalink: /news/page/:num/
  per_page: 10
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
blog_name: " " # disable inherited blog name
blog_description: " " # disable inherited blog description
show_tags: false
---
<ul class="post-list">
  {% for post in paginator.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      <h2><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
    </li>
  {% endfor %}
</ul>

{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}" class="previous">Previous</a>
  {% endif %}
  <span class="page-number">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}" class="next">Next</a>
  {% endif %}
</div>
{% endif %}