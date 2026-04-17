
export class Project {

    constructor(id, gitUrl, imgUrl, gitCode, title, tagSvg, tags, description, brand) {
        this.id = id;
        this.gitUrl = gitUrl;
        this.imgUrl = imgUrl;
        this.gitCode = gitCode;
        this.title = title;
        this.tagSvg = tagSvg;
        this.tags = tags;
        this.description = description;
        this.brand = brand;
    }

    getProjectCard() {
        return `<img src="${this.imgUrl}" class="project_image">
					<div class="project_contents">
						<h2 class="project_head">${this.title}</h2>
						    <div class="featured_tags btn_js">
							   ${this.tags.map((tag, i) => `<a class="tags_btn tags_skill tag project_btn" style="--brand-color:${this.brand[i]};"><img src="${this.tagSvg[i]}" class="skill_logo" id="li_btn"></img>${tag}</a>`).join('')}
							</div>
							<div class="project_divider"></div>
								<p class="proj_desc">${this.description}</p>
							<div class="project_source">
								<a class="src_button" href="${this.gitUrl}" target="_blank" id="live_btn"><img src="assets/svg/play.svg" alt="" class="src_img" id="play_svg"> Live Demo</a>
								<a href="${this.gitCode}" class="src_button"><img src="assets/images/logo/github.png" alt="" class="src_img" id="gh_img">Source Code</a>
							</div>
					</div>
				<a href="${this.gitCode}" target="_blank" id="adjust_link"><img src="assets/svg/link.svg" class="link"></a>`
    }
			
}
    