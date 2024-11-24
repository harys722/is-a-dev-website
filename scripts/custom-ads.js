(function () {
    if (typeof _bsa !== "undefined" && _bsa) {
        _bsa.init("custom", "CW7DE2JY", "placement:is-a.dev", {
            target: "#badge-js",
            template: `
<style>
.bsa__##external_id## {
	background-image: linear-gradient(145deg, ##backgroundColor##, 90%, ##backgroundColor##80),
		linear-gradient(##textColor## 1px, transparent 0),
		linear-gradient(90deg, ##textColor## 1px, transparent 0);
	background-color: ##backgroundColor##;
}
</style>

<a class="badge-container bsa__##external_id##" style="background-color: ##backgroundColor##; color: ##textColor##; border-color: ##textColor##" href="##link##" rel="sponsored noopener" target="_blank" title="##company## — ##tagline##">
<img class="badge-icon" style="background-color: ##backgroundColor##" src="##image##">
<div class="badge-flex">
	<div class="badge-title">##company## — ##tagline##</div>
	<div class="badge-description">##description##</div>
	<img class="badge-logo" src="##logo##">
	<div class="badge-cta" style="background-color: ##ctaBackgroundColor##; color: ##ctaTextColor##">##callToAction##</div>
</div>
</a>
`
        });
    }
})();
