# Introduction

(showing text with "Introduction")

Hello, my name is Nico, I'm from Borna, Germany. I would like to welcome to the video presentation of my CS50 final project. During my gap year in New Zealand 2023, I thought about ideas for my final project. As I did a lot of gardening as a helper, I wanted to do something that has to do with gardening. So the idea of the web app 'Gartenzeit' was born.

# What is Gartenzeit

(Show text 'What is Gartenzeit?')

Gartenzeit is a web app that enables people who love gardening and fresh vegetables and fruits to look for other passionate people to help them in their garden with harvesting or to find garden owners who need a hand. It's a German word and translates to 'Garden time'. The whole idea is based on social gardening, so that people connect through spending time together with harvesting their own food. Users can offer rewards for helpers, like sharing the produce, but not money. Users can create events called "Harvests" that other users can join.

# My tech stack

(Show text 'The tech stack')

I've decided to use NextJS as my front and back end, as I thought it would be nice to have everything in one codebase and to work with Javascript or Typescript in both. Also, I've used supabase to host the postreSQL database and store the profile images of users into a storage bucket. To query the database and to create the database schema and create or delete rows, I've used the object-relational mapping tool Prisma. To handle the authentication, I've used the library NextAuth. For all further libraries and tools I've used, please check out the README file.

# Demonstrating the web app

Now, I would like to share the first basic version of Gartenzeit.

## User Registration

(Show video of how users can register)

Users need to have an account in order to access Gartenzeit. Thus, users have to create an account first. After the login, the user is redirected to the homepage. I will continue here in a second, I just show you, how the user login page works, when already registered users want to login again.

## User Login

(Make cut and show video of login form)

Users can login back to their account by providing their email address an password. After the successfull login, they will see a success message. If an error would occure, for example if I enter a wrong password (show wrong password entering), the user would see an error message. Now let's take a look at the homepage.

## The homepage

(Make cut to show homepage)

On the homepage, the users are greated with their username and profile image, or in this case, with a placeholder image. When users click on their image, they will get to their profile, as you will see later in the video. The following sections show all joined and hosted Harvests. As we just created an new account, there are not harvests to display of course. To start, let's find a harvest that is hosted by someone else on the Discovery Page.

## Discovery page

(Show discovery page)

On the discovery page, we can see all hosted Harvests of other users that we haven't joined yet. I plan to implement filters and search options for this page so it's easier to find the right harvests we are interested in. For now, let's take a look at this one. (Show a harvest with mouse). As you can see, the card of this harvest shows all important information about the harvest, like the title, who is hosting the harvest, what will be harvested and when the harvest will start. If we click on the harvest card, the page for the harvests opens. (Click on harvest card)

## Harvest Page

(Show harvest page)

Now, we can see all information about the harvest with additional information like the description and the reward (Scroll trough page). As this harvest is not already over, we can join it by clicking the button (click the join harvest button). Now, we get the information, that our participation was confirmed. In future versions, the host will be able to approve or deny participations, but for now, it is automatically confirmed. Now that we joined a harvest, let's see what our homepage shows. (Click on homepage link).

## The hompage with joined harvest

We just need a quick refresh (reload page), and here it is: The harvest we joined is now listed on our homepage. Here we can access it easily to check the information again or leave the harvest. (Go to harvest and leave) (go back to homepage). As you can see, now the harvest disappeared, as we left it.

## Creating a harvest

Now let's try to create our own harvest. (Click on create harvest). On this page, you can enter all the information for you own harvest into this form (Enter details into the form, play faster). To show you the form validation, I've entered a description that is too short and I've selected a date that is already in the past. When I click the button (click the button), there will be an error at the according input field. This, of course, also works with all other inputs. (Correct inputs and cut). Now, with the improved version, let's try to create the harvest again. (click button). After successfully creating the harvest, we are redirected to the page of the harvest. This time, as we are the host, we cannot join the harvest. But now we have a settings menu item. (click settings). So far, you can delete the harvest inside the settings. Let's take a look at the homepage. It now shows the harvest with just created.

## Deleting a harvest

We can also delete the harvest as well (delete it), to remove it from the homepage. (show homepage).

## User profile

Now, let us check out the user profile, by clicking on the profile image. (Click on image). On our profile page, we can see our image, username, location and description. So far, we have not created a description. We can change that in the settings. (Click on settings)

## User settings

In the user settings, (scroll to according section), we can update our information, like the profile image, our email, password and description.

## Updating profile image

Let's customize our profile a bit and update some details. To update the image, we can just click this button to select a file. (select image) You propably won't see my explorer window now, but I'm selecting an image. Now that we selected an image, we can save it. As you can see, it was successfully saved. In case of an error like the wrong image format, an error message would be displayed.

## Updating email

To update the email address, we just have to enter a new one. (enter email that is already taken). Oops, as you can see, this email is already taken. Again, this time with a email that is not taken (enter new email). The email was successfully updated and we've to login again with our new email. (login again). We are automatically redirected to the settings page after the login.

## Updating description

Now it's time for a new profile description, like this: (enter new description). Click save, and that's it.

## Updating password

To update our password, (enter passwords) we have to enter our current password and a new password. Done.

## Logging out

Last but not least on the settings page, we can log us out, by clicking the button (click button).

## Checking updated profile

(Login again), after logging in again, let's check out our profile page. (Do the following) Go back and refresh the page, and now we can see our new image and description.

## Other profiles

Of course, we cannot just see our own profile, but also the profiles of other users. (Click on discovery). Let's go back to the discovery page. Here we can click on the host of the harvest to show the profile.

# End

I hope you liked my little project. I definitely plan to add more features take make Gartenzeit more user friendly and unique, but for now I'm quite satisfied with the result.

Thanks for watching 💖
