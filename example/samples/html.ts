export const sampleHTML = `
    <h1>React Native Remark</h1>

    <h1>h1 Heading</h1>
    <h2>h2 Heading</h2>
    <h3>h3 Heading</h3>
    <h4>h4 Heading</h4>
    <h5>h5 Heading</h5>
    <h6>h6 Heading</h6>

    <h2>Horizontal Rules</h2>
    <hr>
    <hr>
    <hr>

    <h2>Typographic replacements</h2>
    <p>Enable typographer option to see result.</p>
    <p>(c) (C) (r) (R) (tm) (TM) (p) (P) +-</p>
    <p>test.. test... test..... test?..... test!....</p>
    <p>!!!!!! ???? ,,  -- ---</p>
    <p>"Smartypants, double quotes" and 'single quotes'</p>

    <h2>Emphasis</h2>
    <p><strong>This is bold text</strong></p>
    <p><strong>This is bold text</strong></p>
    <p><em>This is italic text</em></p>
    <p><em>This is italic text</em></p>
    <p><del>Strikethrough</del></p>

    <h2>Blockquotes</h2>
    <blockquote>
      <p>Blockquotes can also be nested...</p>
      <blockquote>
        <p>...by using additional greater-than signs right next to each other...</p>
        <blockquote>
          <p>...or with spaces between arrows.</p>
        </blockquote>
      </blockquote>
    </blockquote>

    <h2>Lists</h2>
    <p>Unordered</p>
    <ul>
      <li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>
      <li>Sub-lists are made by indenting 2 spaces:
        <ul>
          <li>Marker character change forces new list start:
            <ul>
              <li>Ac tristique libero volutpat at</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Very easy!</li>
    </ul>

    <p>Ordered</p>
    <ol>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
    </ol>

    <ol>
      <li>You can use sequential numbers...</li>
      <li>...or keep all the numbers as <code>1.</code></li>
    </ol>

    <p>Start numbering with offset:</p>
    <ol start="57">
      <li>foo</li>
      <li>bar</li>
    </ol>

    <p>List with heading</p>
    <ul>
      <li><h1>Title</h1></li>
      <li><h2>Sub title</h2></li>
      <li><h3>Test</h3></li>
      <li>body</li>
    </ul>

    <h2>Code</h2>
    <p>Inline <code>code</code></p>
    <p>Indented code</p>
    <pre><code>// Some comments
line 1 of code
line 2 of code
line 3 of code</code></pre>

    <p>Block code "fences"</p>
    <pre><code>Sample text here...</code></pre>

    <p>Syntax highlighting</p>
    <pre><code class="language-js">var foo = function (bar) {
  return bar++;
};

console.log(foo(5));</code></pre>

    <h2>Tables</h2>
    <table>
      <thead>
        <tr>
          <th>Option</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>data</td>
          <td>path to data files to supply the data that will be passed into templates.</td>
        </tr>
        <tr>
          <td>engine</td>
          <td>engine to be used for processing templates. Handlebars is the default.</td>
        </tr>
        <tr>
          <td>ext</td>
          <td>extension to be used for dest files.</td>
        </tr>
      </tbody>
    </table>

    <h2>Table With Long Text</h2>
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Supplier</th>
          <th>Location</th>
          <th>Rating</th>
          <th>Reviews</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Wireless Bluetooth Headphones</td>
          <td>Electronics</td>
          <td>High-quality noise-canceling headphones with 30-hour battery life</td>
          <td>$89.99</td>
          <td>45</td>
          <td>TechCorp Inc</td>
          <td>New York</td>
          <td>4.5</td>
          <td>127</td>
          <td>In Stock</td>
        </tr>
        <tr>
          <td>Organic Cotton T-Shirt</td>
          <td>Clothing</td>
          <td>Comfortable 100% organic cotton t-shirt available in multiple colors</td>
          <td>$24.50</td>
          <td>120</td>
          <td>EcoFashion Ltd</td>
          <td>California</td>
          <td>4.2</td>
          <td>89</td>
          <td>Available</td>
        </tr>
        <tr>
          <td>Smartphone Case</td>
          <td>Accessories</td>
          <td>Durable protective case with built-in kickstand for phones</td>
          <td>$15.75</td>
          <td>67</td>
          <td>MobileGear Co</td>
          <td>Texas</td>
          <td>3.8</td>
          <td>34</td>
          <td>Limited</td>
        </tr>
        <tr>
          <td>Coffee Maker</td>
          <td>Home & Kitchen</td>
          <td>Programmable coffee maker with thermal carafe and auto-shutoff</td>
          <td>$129.99</td>
          <td>23</td>
          <td>HomeEssentials</td>
          <td>Illinois</td>
          <td>4.7</td>
          <td>156</td>
          <td>Backorder</td>
        </tr>
      </tbody>
    </table>

    <h2>Links</h2>
    <p><a href="http://dev.nodeca.com">link text</a></p>
    <p><a href="http://nodeca.github.io/pica/demo/" title="title text!">link with title</a></p>
    <p>Autoconverted link <a href="https://github.com/nodeca/pica">https://github.com/nodeca/pica</a> (enable linkify to see)</p>

    <h2>Images</h2>
    <img src="https://octodex.github.com/images/minion.png" alt="Minion">
    <img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat">
    <p>Like links, Images also have a footnote style syntax</p>
    <img src="https://octodex.github.com/images/dojocat.jpg" alt="Alt text" title="The Dojocat">
    <p>With a reference later in the document defining the URL location:</p>

    <h2>Plugins</h2>
    <p>The killer feature of <code>markdown-it</code> is very effective support of
    <a href="https://www.npmjs.org/browse/keyword/markdown-it-plugin">syntax plugins</a>.</p>

    <h3><a href="https://github.com/markdown-it/markdown-it-emoji">Emojies</a></h3>
    <blockquote>
      <p>Classic markup: :wink: :cry: :laughing: :yum:</p>
      <p>Shortcuts (emoticons): :-) :-( 8-) ;)</p>
    </blockquote>
    <p>see <a href="https://github.com/markdown-it/markdown-it-emoji#change-output">how to change output</a> with twemoji.</p>

    <h3><a href="https://github.com/markdown-it/markdown-it-sub">Subscript</a> / <a href="https://github.com/markdown-it/markdown-it-sup">Superscript</a></h3>
    <ul>
      <li>19<sup>th</sup></li>
      <li>H<sub>2</sub>O</li>
    </ul>

    <h3><a href="https://github.com/markdown-it/markdown-it-ins">&lt;ins&gt;</a></h3>
    <p><ins>Inserted text</ins></p>

    <h3><a href="https://github.com/markdown-it/markdown-it-mark">&lt;mark&gt;</a></h3>
    <p><mark>Marked text</mark></p>

    <h3><a href="https://github.com/markdown-it/markdown-it-footnote">Footnotes</a></h3>
    <p>Footnote 1 link<sup id="fnref1"><a href="#fn1">1</a></sup>.</p>
    <p>Footnote 2 link<sup id="fnref2"><a href="#fn2">2</a></sup>.</p>
    <p>Inline footnote<sup id="fnref3"><a href="#fn3">3</a></sup> definition.</p>
    <p>Duplicated footnote reference<sup id="fnref2"><a href="#fn2">2</a></sup>.</p>

    <div class="footnotes">
      <ol>
        <li id="fn1">Footnote <strong>can have markup</strong> and multiple paragraphs. <a href="#fnref1">↩</a></li>
        <li id="fn2">Footnote text. <a href="#fnref2">↩</a></li>
        <li id="fn3">Text of inline footnote <a href="#fnref3">↩</a></li>
      </ol>
    </div>

    <h3><a href="https://github.com/markdown-it/markdown-it-deflist">Definition lists</a></h3>
    <dl>
      <dt>Term 1</dt>
      <dd>Definition 1 with lazy continuation.</dd>
      <dt>Term 2 with <em>inline markup</em></dt>
      <dd>
        <p>Definition 2</p>
        <pre><code>{ some code, part of Definition 2 }</code></pre>
        <p>Third paragraph of definition 2.</p>
      </dd>
    </dl>

    <p><em>Compact style:</em></p>
    <dl>
      <dt>Term 1</dt>
      <dd>Definition 1</dd>
      <dt>Term 2</dt>
      <dd>Definition 2a</dd>
      <dd>Definition 2b</dd>
    </dl>

    <h3><a href="https://github.com/markdown-it/markdown-it-abbr">Abbreviations</a></h3>
    <p>This is <abbr title="Hyper Text Markup Language">HTML</abbr> abbreviation example.</p>
    <p>It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.</p>

    <h3><a href="https://github.com/markdown-it/markdown-it-container">Custom containers</a></h3>
    <div class="warning">
      <p><em>here be dragons</em></p>
    </div>

    <h2>Mermaid</h2>

    <pre>
      <code class="language-mermaid">
        graph LR
            A[Square Rect] -- Link text --> B((Circle))
            A --> C(Round Rect)
            B --> D{Rhombus}
            C --> D
      </code>
    </pre>

    <pre>
      <code class="language-mermaid">
        pie title What Voldemort doesn't have?
          "FRIENDS" : 2
          "FAMILY" : 3
          "NOSE" : 45
      </code>
    </pre>

    <pre>
      <code class="language-mermaid">
        sequenceDiagram
          participant Alice
          participant Bob
          Alice->>John: Hello John, how are you?
          loop HealthCheck
              John->>John: Fight against hypochondria
          end
          Note right of John: Rational thoughts&lt;br/>prevail...
          John-->>Alice: Great!
          John->>Bob: How about you?
          Bob-->>John: Jolly good!
      </code>
    </pre>
  `;
