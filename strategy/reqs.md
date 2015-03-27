---
layout: page_with_subnav
title: User + Functional Requirements
group: section4
---

## <a name="social"></a>Social Integration
* We may want users to be able to connect a social login to his account.
* Social login will enable things like "43 of your Facebook friends liked this website," which will be used to improve "relevance" in terms of the content we display on a category page for example.
* We would use social login as a tactic that supports content exploration, but we would not build "social" features like "follow this user." We'd want our users to be focused on content, not on people.

## <a name="homepage"></a>Home Page
* User can view editorialized groupings of apps only, websites only, or a mix of apps and websites. And other content types as they come on board.
* Editorial groupings may have different CTAs re: websites.
  * <span>User can click to open a website directly from the editorial grouping.</span>
  * <span>User can click to go to a website detail page.</span>  
* The home page is likely to be very different from its current manifestation. E.g., change function to include a mix of external and internal "promo pieces" and/or Recommendations inside the feed" area.
* The home page UI is likely to be very different from its current manifestation. E.g., less blocky, less listy, more immersive, more of a "front door" approach (rather than today's "here's everything" approach).
* Get ready for the awesome!
* See [Figure][1]


## <a name="lists"></a>List Pages - Categories, Collections, New, Popular, Recommended, Search Results
* User can view a mixed list of apps and websites on any list page.
* Apps and Websites have different CTAs.
  * <span>Apps = Get, which intiates download process.</span>
  * <span>Some apps may be downloaded but not installed. These would have CTA of "Install," which would initiate the install process.</span>
  * <span>Websites = Open, which opens site in browser</span>
* On list pages, a touch-based user can tap a website to get "quick info," which would be a description of the site and possibly other data like # of likes. A pointer-based user could hover to see the same info. From the quick info, user could proceed to the detail page, or open site in browser, or dismiss/close the "quick info."
* List pages are likely to have layouts that are different from one another (vs today's situation where they're all the same).
* List pages are likely to display different content on different pages. E.g., "likes" might be displayed on the Popular page but not on the Trending page. 
* See [Figure][2]


## <a name="websitedetail"></a>Website Detail Page 
* <b>Note</b>: We'll collect website language as part of submission process. But won't display it until we work out some challenges. [Discussion here][11].
* User can view details about a website, including Title, Description, the logo or icon, and the website categories.
* User can view which "platforms" the website works on, e.g., mobile, tablet, desktop, and future things like watch or tv.
* User can "open" a website, which launches the site in the user's browser.
* User can click a website category to go to the relevant category page.
* User can click a website language to go to a search results page showing all apps that have that language (with region exclusions applied).
* If Submitter has chosen "Public" for his Website Submissions, user can view details about the website Submitter on the website detail page - including Submitter's display name, profile pic, and Personal Description.
  * <span>In this case, user can click Submitter's display name to go the Submitter's Profile page.</span>
* If Submitter has chosen "Private" for his Website Submissions, or if Submitter has a Private Profile, Submitter information will not be displayed on the website detail page. 
* User can like a website, which increments a user-facing counter on the detail page (and other pages).
* User can send the website URL via SMS and email.
* User can share the website URL on social platforms, e.g., Facebook or Twitter.
* User can click a link to go to the SUMO page that explains how to Submit a Mobile Website.
* User can click a link to report an issue with the website, which opens the Report Issue layer. Process and design in progress.
* User can click a link to claim ownership of the website, which opens the Claim Ownership layer. Process and design in progress. This functionality is requested by BD team, who believe there will be some partners who do not want their websites listed in MP.
* User can view 3 "related" content apps and/or websites. 
  * <span>Business rule: Pull from a random group of 5 apps and 5 websites in the same category as the website. Display 3 of them on the page.</span>
  * <span>Where website has mulitple categories, only pick from the first category.</span>
  * <span>If it comes up in the random list, replace the website the user is currently looked at with a different one.</span>
  * Note: this business rule will be modified in the future to be more sophisticated. Here's an extreme example: "top 3 trending apps in the same category liked by other people who looked at this website."</span>
  * <span>In each related content block, user can see how many "likes" the website has and how many "visits" to the website came from the Marketplace. These are not actionable.</span>
  * <span>If a content block is an app, display its app rating in the block. Websites don't have ratings.</span>
  * <span>In a content block, user can click the app/website title to go to its detail page.</span>
  * <span>In a content block, user can click "Get" button to initiate the install process for an app.</span>
  * <span>In a content block, user can click "Open" button to open a website (launches in browser).</span>
* See [Figure][3]


## <a name="profilegeneral"></a>Profile Page - General
* If a Profile page is Public, user can view it.
* If a Profile page is Private, user cannot view it, unless he is the Profile Owner.
* If user is not logged in and navigates by url to any page in the "Profile" area, display Sign In and Create Account CTAs. Also display 6 trending content blocks. Business rule: choose the top 3 trending apps and the top 3 most popular websites.
  * <span>User can interact with these content blocks as described for Website Detail Page.</span>


## <a name="profileprivate"></a>Profile Page - Private - visible only to Profile owner
* User must be logged in to view his Profile page.
* Profile page displays profile icon, display name, and email address (got rid of region - it's meaningless to consumers).
* If user's Profile is Public, he can click a link to see his public Profile (see  <a href="#profilepublic">Profile Page - Public</a>).

* User can add or edit his photo. Options for MP app and MP website on phone include: add from camera roll, take photo, and use Gravator. Options for MP website on desktop include: upload photo, take photo (webcam), and use Gravatar.  Change should be reflected back to FxA.
* User can edit his display name. Change should be reflected back to FxA.
* User can set his Profile to Private (default) or to Public.
* User can click a link to see an example Public Profile.
* If Profile is set to Public, user can set Website Submissions to Private (default) or Public. If Profile is set to Private, this option is not available.
* User can click a link to see an example Public Profile with Public Website Submissions.
* User can manage preferences for seeing Recommendations on MP (on by default). User can click a link to SUMO page explaining Recommendations. Already exists.
* If user has a developer account, user can manage devhub email preferences. See [Bug 987362][10]. User can click a link to learn about these email preferences - not sure these pages exist - may need to create them.
* See [Figure 1][4] and [Figure 2][5]


<a name="profilepublic"></a><h2 style="padding-top: 120px; margin-top: -120px;">Profile Page - Public - visible to anyone with the URL</h2>

* User can view a Profile Owner's Public Profile.
* If Profile Owner made Website Submissions Public, user can see a "list" of the Profile Owner's Website Submissions. If Website Submissions are Private, user would just see the Profile Owner's display name and profile pic.
  * <span>That "list" will include the "likes" and "visits" for each website, as well as the website icon, its title, and a CTA to open the website in browser.</span>
* User can view how many people "applauded" the Profile Owner for his contribution to Marketplace.
* User can give "applause" to the Profile Owner, which increments a user-facing counter on this page (possible other pages TBD).
* Applause is a "like" for the Profile Owner (it's like "Thanks" on NextDoor).
* User can share the Profile page using email, SMS, and social platforms.
* See [Figure][6]


## <a name="myapps"></a>My Apps - not Public
* User can view a list of the apps he's installed across all devices.
* User can filter the list to show only apps installed on a specific "platform" - Desktop, Android Mobile, Android Tablet, and Firefox OS. Default is the platform user is currently on.
* List is a simplified version. Each block includes only the app icon, the short title, and a CTA to open the app (or CTA to install if downloaded but not installed).
* User cannot delete apps from this page. Page explains that user must manage apps from the device where they are installed. Prob should link to a (new) SUMO article that overviews the many ways to get to "settings" depending on platform.
* See [Figure][7]


## <a name="mysites"></a>My Favorites - not Public
* <b>Note</b>: Updated idea for this. Liking a website creates this list. Changed name to "Favorites" to align with in-progress V3 thinking for the browser experience on phone.
* User can view a list of the websites he's liked on Marketplace. This is a convenience for users of Marketplace who may (or may not) also use the browser to bookmark the site. In the future, it would be nice if "liking" a website on Marketplace added that site to the user's browser bookmarks, e.g., a browser bookmark folder called "Marketplace Favorites." The approach for future should align with future thinking about the phone's browser experience.
* User can filter the list to show only websites liked from a specific "platform" - Desktop, Android Mobile, Android Tablet, and Firefox OS. Default is the platform user is currently on.
* List is a simplified version. Each block includes only the website logo/icon, the short title, and a CTA to open the website in browser.
* User can unlike individual items on this list, or unlike a group of them at the same time. This would immediately remove them from this list.
* <b>Note:</b> Figures show "delete" functionality - ignore this as we've changed the idea.
* See [Figure][8]


## <a name="mysubs"></a>My Submissions - not Public
* User can view a list of the websites he's submitted to Marketplace. This is a list of approved websites, not every site the user submitted.
* This page is where the user can go to get "stats" on his Website Submissions. So the content blocks will include "likes" and "visits" per website.
* If we collect this info as part of submission > review process, content blocks would also show "X other submissions," meaning 12 other people also submitted this site. It's one indicator of the website's popularity.
* For each website, user can share the stats using email, SMS, and social platforms.
* User can click a link to go the SUMO page explaining how to submit a mobile website (if user wants to submit more of them).
* See [Figure][9]



[1]: {{ site.baseurl }}/strategy/figures/figure_home.png "figure - home page"
[2]: {{ site.baseurl }}/strategy/figures/figure_list.png "figure - list page"
[3]: {{ site.baseurl }}/strategy/figures/figure_web_detail.png "figure - website detail page"
[4]: {{ site.baseurl }}/strategy/figures/figure_profile_private.png "figure - profile private 1"
[5]: {{ site.baseurl }}/strategy/figures/figure_profile_private_2.png "figure - profile private 2"
[6]: {{ site.baseurl }}/strategy/figures/figure_profile_public.png "figure - profile public"
[7]: {{ site.baseurl }}/strategy/figures/figure_my_apps.png "figure - my apps"
[8]: {{ site.baseurl }}/strategy/figures/figure_my_sites.png "figure - my websites"
[9]: {{ site.baseurl }}/strategy/figures/figure_my_subs.png "figure - my submissions"
[10]: https://bugzilla.mozilla.org/show_bug.cgi?id=987362 "Go to Bug"
[11]: https://github.com/MarketplaceUX/mow/issues/4 "Go to Open Issue"

