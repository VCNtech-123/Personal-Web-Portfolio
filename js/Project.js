
export class Project {

    constructor(gitUrl, imgUrl, gitCode, title, tagSvg, tags, description) {
        this.gitUrl = gitUrl;
        this.imgUrl = imgUrl;
        this.gitCode = gitCode;
        this.title = title;
        this.tagSvg = tagSvg;
        this.tags = tags;
        this.description = description;
    }

    getProjectCard() {
        return `<a href="${this.gitUrl}" target="_blank"><img src="${this.imgUrl}" class="project_image"></a>
							<h2 class="project_head">${this.title}<a href="${this.gitCode}" target="_blank" class="adjust_link"><img src="assets/images/logo/link.png" class="link"></a></h2>
							<div class="featured_tags btn_js">
								${this.tags.map((tag, i) => `<a class="tags_btn tags_skill tag"><img src="${this.tagSvg[i]}" class="skill_logo" id="li_btn"></img>${tag}</a>`).join('')}
							</div>
							<div class="project_divider"></div>
							<p class="proj_desc">${this.description}</p>`
    }
}
    