---
layout: page
title: Contacta
permalink: /es/contacto/
image: /images/16.jpg
smallImage: true
language: es
ref: contacto
---
<div class="form-box">
  <div class="contact-head">
    {% if site.data.contact.description %}
      <p class="contact-description">{{site.data.contact.description}}</p>
    {% endif %}
  </div>
  <form class="form" action="{% if site.data.contact.email %}https://formspree.io/f/{{site.data.contact.email}}{% else %}#{% endif %}" method="POST">
    <div class="form__group">
      <label class="form__label screen-reader-text" for="form-name">Tu Nombre</label>
      <input class="form__input" id="form-name" type="text" name="name" placeholder="Tu Nombre" required>
    </div>
    <div class="form__group">
      <label class="form__label screen-reader-text" for="form-email">Tu Email</label>
      <input class="form__input" id="form-email" type="email" name="_replyto" placeholder="Tu Email" required>
    </div>
    <div class="form__group">
      <label class="form__label screen-reader-text" for="form-text">Tu Mensaje</label>
      <textarea class="form__input" id="form-text" name="text" rows="10" placeholder="Tu Mensaje para nosotros" required></textarea>
    </div>
    <div class="form__group">
      <button class="button button--primary" type="submit">Enviar</button>
    </div>
  </form>
</div>