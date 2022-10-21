---
layout: page
title: Contacta
permalink: /contact/
image: '/images/16.jpg'
---

<div class="form-box">
  <div class="contact-head">
    {% if site.data.contact.description %}
      <p class="contact-description">{{site.data.contact.description}}</p>
    {% endif %}
  </div>
  <form class="form" action="{% if site.data.contact.email %}https://formspree.io/f/{{site.data.contact.email}}{% else %}#{% endif %}" method="POST">
    <div class="form__group">
      <label class="form__label screen-reader-text" for="form-name">Your Name</label>
      <input class="form__input" id="form-name" type="text" name="name" placeholder="Nombre" required>
    </div>
    <div class="form__group">
      <label class="form__label screen-reader-text" for="form-email">Your Email</label>
      <input class="form__input" id="form-email" type="email" name="_replyto" placeholder="Email" required>
    </div>
    <div class="form__group">
      <label class="form__label screen-reader-text" for="form-text">Your Message</label>
      <textarea class="form__input" id="form-text" name="text" rows="10" placeholder="Mensaje" required></textarea>
    </div>
    <div class="form__group">
      <button class="button button--primary" type="submit">Enviar</button>
    </div>
  </form>
</div>