# Yamm #


This is *Yet another megamenu for [Bootstrap 3](http://getbootstrap.com/)* from Twitter.   
   
Lightweight and pure CSS megamenu that uses the standard navbar markup and the fluid grid system classes from Bootstrap 3. Work for fixed and responsive layout and has the facility to include (almost) any Bootstrap elements.

### Markup

1. Reuse navbar markup and add class `.yamm` at the top.

2. Then add your markup into the `.dropdown-menu`

3. Optionally use `.yamm-content` to wrap content with padding.

Example

    <nav class="navbar yamm navbar-default " role="navigation">
        ...
        <ul class="nav navbar-nav">
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                <ul class="dropdown-menu">
                    <li>
                        <div class="yamm-content">
                        <div class="row"> 
                            ...
                    </li>
                </ul>
            </li>
        </ul>
        ...
    </nav>


### Fullwidth

By default every mega-dropdown will take the content size so is possible to use add `.yamm-fw` to `.dropdown` to expand it fullwidth.  
Yamm works better with fullwidth menus.

Example

    <nav class="navbar yamm navbar-default " role="navigation">
    ...
         <ul class="nav navbar-nav">
           <li class="dropdown yamm-fw">
                 ...
           </li>
         </ul>
    ...
    </nav>

### Optional Responsive Adjustment to Fixed Navbars

Optionally add `.yamm-responsive` to a fixed `.navbar-fixed-top` or `.navbar-fixed-bottom` to change its behavior on mobile devices. Navbar will no longer be fixed, and megamenu content will be fully visible by no longer floating over content.

Example

    <nav class="navbar yamm yamm-responsive navbar-default navbar-fixed-top" role="navigation">
    ...
    </nav>

### Javascript

If necessary, this code will prevent unexpected menu close when using some components (like accordion, forms, etc)

    $(document).on('click', '.yamm .dropdown-menu', function(e) {
       e.stopPropagation()
    })


### Install via composer

	{ 
		"require": {
			"geedmo/yamm3": "dev-master"
		}
	}

#[Online Demo](http://geedmo.github.io/yamm3)



