<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* admin/country/index.html.twig */
class __TwigTemplate_f862347a64083d0a1118d2c1e235da81 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "admin/admin.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/country/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/country/index.html.twig"));

        $this->parent = $this->loadTemplate("admin/admin.html.twig", "admin/country/index.html.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        // line 0
        yield "Countries";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        return; yield '';
    }

    // line 6
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 7
        yield " <p> <a class=\"btn btn-primary btn-sm\" href=\"";
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getUrl("admin.country.create");
        yield "\">Ajouter un pays</a></p>

<table class=\"table\">
<thead>
  <tr>
    <th>Nom</th>
    <th style=\"width: 200px\">Actions</th>
  </tr>
</thead>
<tbody>
";
        // line 17
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable((isset($context["countries"]) || array_key_exists("countries", $context) ? $context["countries"] : (function () { throw new RuntimeError('Variable "countries" does not exist.', 17, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["country"]) {
            // line 18
            yield "  <tr>
    <td> <a href=\"";
            // line 19
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getUrl("admin.country.edit", ["id" => CoreExtension::getAttribute($this->env, $this->source, $context["country"], "id", [], "any", false, false, false, 19)]), "html", null, true);
            yield "\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["country"], "name", [], "any", false, false, false, 19), "html", null, true);
            yield "</a></td>
    <td>
    <div class=\"d-flex gap-1\">
    <a class=\"btn btn-primary btn-sm\" href=\"";
            // line 22
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getUrl("admin.country.edit", ["id" => CoreExtension::getAttribute($this->env, $this->source, $context["country"], "id", [], "any", false, false, false, 22)]), "html", null, true);
            yield "\">Editer</a>
    <form action=\"";
            // line 23
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin.country.delete", ["id" => CoreExtension::getAttribute($this->env, $this->source, $context["country"], "id", [], "any", false, false, false, 23)]), "html", null, true);
            yield "\" method=\"post\">
      <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
      <button type=\"submit\" class=\"btn btn-danger btn-sm\">Supprimer</button>
    </form>
    </div>
    </td>
  </tr>
   ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['country'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 31
        yield "<tbody>
</table>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "admin/country/index.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  138 => 31,  124 => 23,  120 => 22,  112 => 19,  109 => 18,  105 => 17,  91 => 7,  81 => 6,  70 => 0,  60 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'admin/admin.html.twig' %}
 
{% block title \"Countries\" %}


{% block body %}
 <p> <a class=\"btn btn-primary btn-sm\" href=\"{{ url('admin.country.create') }}\">Ajouter un pays</a></p>

<table class=\"table\">
<thead>
  <tr>
    <th>Nom</th>
    <th style=\"width: 200px\">Actions</th>
  </tr>
</thead>
<tbody>
{% for country in countries %}
  <tr>
    <td> <a href=\"{{ url('admin.country.edit', {id: country.id}) }}\">{{country.name}}</a></td>
    <td>
    <div class=\"d-flex gap-1\">
    <a class=\"btn btn-primary btn-sm\" href=\"{{ url('admin.country.edit', {id: country.id}) }}\">Editer</a>
    <form action=\"{{ path('admin.country.delete', {id: country.id}) }}\" method=\"post\">
      <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
      <button type=\"submit\" class=\"btn btn-danger btn-sm\">Supprimer</button>
    </form>
    </div>
    </td>
  </tr>
   {% endfor %}
<tbody>
</table>
{% endblock %}
", "admin/country/index.html.twig", "/home/benou/framework-symfony/Symfony/AtypikHouse/templates/admin/country/index.html.twig");
    }
}
