{% for i in interfaces %}
{% if i.addr_type is "dhcp"}
set interfaces {{ i.interface }} unit {{ i.unit }} family {{ i.family }} dhcp
{% else %}
set interfaces {{ i.interface }} unit {{ i.unit }} family {{ i.family }} {{ i.addr_type }} {{ i.addr }}
{% endif %}
{% endfor %}
