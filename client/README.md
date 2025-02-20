# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<div class="wysiwyg-menu ng-scope"><div>
  
  <div class="btn-group btn-group-sm wysiwyg-btn-group-margin">
    <button class="btn btn-default active" title="" ng-click="format('bold')" ng-class="{ active: isBold }" type="button" data-original-title="Bold">
      <i class="fa fa-bold"></i>
    </button>
    <button class="btn btn-default" title="" ng-click="format('italic')" ng-class="{ active: isItalic }" type="button" data-original-title="Italic">
      <i class="fa fa-italic"></i>
    </button>
    <button class="btn btn-default active" title="" ng-click="format('underline')" ng-class="{ active: isUnderlined }" type="button" data-original-title="Underline">
      <i class="fa fa-underline"></i>
    </button>
    <button class="btn btn-default" title="" ng-click="format('strikethrough')" ng-class="{ active: isStrikethrough }" type="button" data-original-title="Strikethrough">
      <i class="fa fa-strikethrough"></i>
    </button>
    <button class="btn btn-default" title="" ng-click="format('subscript')" ng-class="{ active: isSubscript }" type="button" data-original-title="Subscript">
      <i class="fa fa-subscript"></i>
    </button>
    <button class="btn btn-default" title="" ng-click="format('superscript')" ng-class="{ active: isSuperscript }" type="button" data-original-title="Superscript">
      <i class="fa fa-superscript"></i>
    </button>
  </div>
  
  <div class="btn-group btn-group-sm wysiwyg-btn-group-margin">
    <select class="form-control wysiwyg-select ng-pristine ng-valid ng-touched" title="Format Block" ng-model="formatBlock" ng-options="f.name for f in formatBlocks" ng-change="setFormatBlock()">
      <option label="Heading Blocks" value="object:79" selected="selected">Heading Blocks</option>
      <option label="Heading 1" value="object:80">Heading 1</option>
      <option label="Heading 2" value="object:81" selected="selected">Heading 2</option>
      <option label="Heading 3" value="object:82">Heading 3</option>
      <option label="Heading 4" value="object:83">Heading 4</option>
      <option label="Heading 5" value="object:84">Heading 5</option>
      <option label="Heading 6" value="object:85">Heading 6</option>
    </select>
  </div>
  
  <div class="btn-group btn-group-sm wysiwyg-btn-group-margin">
    <select class="form-control wysiwyg-select ng-pristine ng-valid ng-touched" title="Font" ng-model="font" ng-options="f for f in fonts" ng-change="setFont()">
      <option label="Arial" value="string:Arial">Arial</option>
      <option label="Arial Black" value="string:Arial Black">Arial Black</option>
      <option label="Comic Sans MS" value="string:Comic Sans MS">Comic Sans MS</option>
      <option label="Courier New" value="string:Courier New">Courier New</option>
      <option label="Georgia" value="string:Georgia">Georgia</option>
      <option label="Helvetica" value="string:Helvetica">Helvetica</option>
      <option label="Helvetica Neue" value="string:Helvetica Neue">Helvetica Neue</option>
      <option label="Impact" value="string:Impact">Impact</option>
      <option label="Lucida Console" value="string:Lucida Console">Lucida Console</option>
      <option label="Lucida Sans Unicode" value="string:Lucida Sans Unicode">Lucida Sans Unicode</option>
      <option label="Palatino Linotype" value="string:Palatino Linotype">Palatino Linotype</option>
      <option label="Tahoma" value="string:Tahoma">Tahoma</option>
      <option label="Times New Roman" value="string:Times New Roman">Times New Roman</option>
      <option label="Trebuchet MS" value="string:Trebuchet MS">Trebuchet MS</option>
      <option label="Verdana" value="string:Verdana" selected="selected">Verdana</option>
    </select>
  </div>
  
  <div class="btn-group btn-group-sm wysiwyg-btn-group-margin">
    <select class="form-control wysiwyg-select ng-pristine ng-valid ng-touched" title="Font-Size" ng-model="fontSize" ng-options="f.size for f in fontSizes" ng-change="setFontSize()">
      <option label="10px" value="object:86">10px</option>
      <option label="13px" value="object:87" selected="selected">13px</option>
      <option label="16px" value="object:88">16px</option>
      <option label="18px" value="object:89">18px</option>
      <option label="24px" value="object:90">24px</option>
      <option label="32px" value="object:91">32px</option>
      <option label="48px" value="object:92">48px</option>
    </select>
  </div>
  
  <div class="btn-group btn-group-sm wysiwyg-btn-group-margin">
    <button class="btn btn-default wysiwyg-colorpicker wysiwyg-fontcolor ng-pristine ng-untouched ng-valid" title="" colorpicker="rgba" colorpicker-position="top" ng-model="fontColor" ng-change="setFontColor()" type="button" data-original-title="Font Color" value="rgb(85, 85, 85)" style="color: rgb(85, 85, 85);">A</button>
    <button class="btn btn-default wysiwyg-colorpicker wysiwyg-fontcolor ng-pristine ng-untouched ng-valid" title="" colorpicker="rgba" colorpicker-position="top" ng-model="hiliteColor" ng-change="setHiliteColor()" type="button" data-original-title="Highlight Color" value="false" style="color: rgb(85, 85, 85);">H</button>
  </div>
  
  <div class="btn-group btn-group-sm wysiwyg-btn-group-margin">
    <button class="btn btn-default" title="" ng-click="format('removeFormat')" type="button" data-original-title="Remove Formatting">
      <i class="fa fa-eraser"></i>
    </button>
  </div>
  
  <div class="btn-group btn-group-sm wysiwyg-btn-group-margin">
    <button class="btn btn-default" title="" ng-click="format('insertorderedlist')" ng-class="{ active: isOrderedList }" type="button" data-original-title="Ordered List">
      <i class="fa fa-list-ol"></i>
    </button>
    <button class="btn btn-default" title="" ng-click="format('insertunorderedlist')" ng-class="{ active: isUnorderedList }" type="button" data-original-title="Unordered List">
      <i class="fa fa-list-ul"></i>
    </button>
    <button class="btn btn-default" title="" ng-click="format('outdent')" type="button" data-original-title="Outdent">
      <i class="fa fa-outdent"></i>
    </button>
    <button class="btn btn-default" title="" ng-click="format('indent')" type="button" data-original-title="Indent">
      <i class="fa fa-indent"></i>
    </button>
  </div>
  
  <div class="btn-group btn-group-sm wysiwyg-btn-group-margin">
    <button class="btn btn-default active" title="" ng-click="format('justifyleft')" ng-class="{ active: isLeftJustified }" type="button" data-original-title="Left Justify">
      <i class="fa fa-align-left"></i>
    </button>
    <button class="btn btn-default" title="" ng-click="format('justifycenter')" ng-class="{ active: isCenterJustified }" type="button" data-original-title="Center Justify">
      <i class="fa fa-align-center"></i>
    </button>
    <button class="btn btn-default" title="" ng-click="format('justifyright')" ng-class="{ active: isRightJustified }" type="button" data-original-title="Right Justify">
      <i class="fa fa-align-right"></i>
    </button>
  </div>
  
  <div class="btn-group btn-group-sm wysiwyg-btn-group-margin">
    <button class="btn btn-default" title="" ng-click="format('formatblock', 'pre')" ng-class="{ active: isPre }" type="button" data-original-title="Code">
      <i class="fa fa-code"></i>
    </button>
    <button class="btn btn-default" title="" ng-click="format('formatblock', 'blockquote')" ng-class="{ active: isBlockquote }" type="button" data-original-title="Quote">
      <i class="fa fa-quote-right"></i>
    </button>
    <button class="btn btn-default" title="" ng-click="format('insertParagraph')" ng-class="{ active: isParagraph }" type="button" data-original-title="Paragragh">P</button>
  </div>
  
  <div class="btn-group btn-group-sm wysiwyg-btn-group-margin">
    <button class="btn btn-default ng-hide" title="" ng-click="format('unlink')" ng-show="isLink" type="button" data-original-title="Unlink">
      <i class="fa fa-unlink"></i>
    </button>
    <button class="btn btn-default" title="" ng-click="createLink()" ng-show="!isLink" type="button" data-original-title="Link">
      <i class="fa fa-link"></i>
    </button>
    <button class="btn btn-default" title="" ng-click="insertImage()" type="button" data-original-title="Image">
      <i class="fa fa-picture-o"></i>
    </button>
  </div>
  
</div></div>
