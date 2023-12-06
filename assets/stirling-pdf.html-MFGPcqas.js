const e=JSON.parse(`{"key":"v-a0e1132e","path":"/services/dockers-on-nas/stirling-pdf.html","title":"Stirling-PDF","lang":"zh-CN","frontmatter":{"article":false,"title":"Stirling-PDF","order":9,"description":"Stirling-PDF 基于 Web 的 PDF 文档开源工具箱，允许您对 PDF 文件执行各种操作，例如拆分合并、转换、重新组织、添加图像、旋转、压缩等。 version: '3.3' services: stirling-pdf: image: frooodle/s-pdf:latest ports: - '8080:8080' volumes: - /location/of/trainingData:/usr/share/tesseract-ocr/4.00/tessdata #Required for extra OCR languages - /location/of/extraConfigs:/configs # - /location/of/customFiles:/customFiles/ environment: - DOCKER_ENABLE_SECURITY=false","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/stirling-pdf.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Stirling-PDF"}],["meta",{"property":"og:description","content":"Stirling-PDF 基于 Web 的 PDF 文档开源工具箱，允许您对 PDF 文件执行各种操作，例如拆分合并、转换、重新组织、添加图像、旋转、压缩等。 version: '3.3' services: stirling-pdf: image: frooodle/s-pdf:latest ports: - '8080:8080' volumes: - /location/of/trainingData:/usr/share/tesseract-ocr/4.00/tessdata #Required for extra OCR languages - /location/of/extraConfigs:/configs # - /location/of/customFiles:/customFiles/ environment: - DOCKER_ENABLE_SECURITY=false"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-06T14:17:09.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2023-12-06T14:17:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Stirling-PDF\\",\\"description\\":\\"Stirling-PDF 基于 Web 的 PDF 文档开源工具箱，允许您对 PDF 文件执行各种操作，例如拆分合并、转换、重新组织、添加图像、旋转、压缩等。 version: '3.3' services: stirling-pdf: image: frooodle/s-pdf:latest ports: - '8080:8080' volumes: - /location/of/trainingData:/usr/share/tesseract-ocr/4.00/tessdata #Required for extra OCR languages - /location/of/extraConfigs:/configs # - /location/of/customFiles:/customFiles/ environment: - DOCKER_ENABLE_SECURITY=false\\"}"]]},"headers":[],"git":{"createdTime":1701872229000,"updatedTime":1701872229000,"contributors":[{"name":"MingsenZZ","email":"115983128+MingsenZZ@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.29,"words":87},"filePathRelative":"services/dockers-on-nas/stirling-pdf.md","localizedDate":"2023年12月6日","excerpt":"<p><a href=\\"https://github.com/Frooodle/Stirling-PDF\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Stirling-PDF</a> 基于 Web 的 PDF 文档开源工具箱，允许您对 PDF 文件执行各种操作，例如拆分合并、转换、重新组织、添加图像、旋转、压缩等。</p>\\n<div class=\\"language-yaml line-numbers-mode\\" data-ext=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token key atrule\\">version</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'3.3'</span>\\n<span class=\\"token key atrule\\">services</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">stirling-pdf</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">image</span><span class=\\"token punctuation\\">:</span> frooodle/s<span class=\\"token punctuation\\">-</span>pdf<span class=\\"token punctuation\\">:</span>latest\\n    <span class=\\"token key atrule\\">ports</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> <span class=\\"token string\\">'8080:8080'</span>\\n    <span class=\\"token key atrule\\">volumes</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> /location/of/trainingData<span class=\\"token punctuation\\">:</span>/usr/share/tesseract<span class=\\"token punctuation\\">-</span>ocr/4.00/tessdata <span class=\\"token comment\\">#Required for extra OCR languages</span>\\n      <span class=\\"token punctuation\\">-</span> /location/of/extraConfigs<span class=\\"token punctuation\\">:</span>/configs \\n      <span class=\\"token comment\\"># - /location/of/customFiles:/customFiles/</span>\\n    <span class=\\"token key atrule\\">environment</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> DOCKER_ENABLE_SECURITY=false\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
