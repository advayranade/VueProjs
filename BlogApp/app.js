var app = new Vue({
  el: "#app",
  data: {
    bloggerName: "John Doe",
    isNameSet: false,
    blogTitle: "",
    blogDate: "",
    blogPostContent: "",
    items: [],
  },
  methods: {
    nameSubmit: function () {
      this.isNameSet = true;
      document.getElementById("name").disabled = true;
    },
    addBlogPost: function () {
      this.items.pop();
      let blogTitle = this.blogTitle;
      let blogDate = this.blogDate;
      let blogContent = this.blogPostContent;
      let blogPost =
        "<div class='blogPost'><h4>" +
        blogTitle +
        "</h4><b>" +
        blogDate +
        "</b><br/><p>" +
        blogContent +
        "</p></div>";
      this.items.push(blogPost);
    },
    newBlogPost: function () {
      let item =
        "<div class='blogPostForm'><h3>Create a new blog post</h3><input placeholder='Blog post title' v-model='blogTitle' /><br><br><input placeholder='Blog post date' v-model='blogDate' /><br><br><textarea placeholder='Blog post' v-model='blogPostContent'></textarea><div><button @click='addBlogPost' id='addBtn'>Add!</button></div></div>";
      this.items.push(item);
    },
    handleAddClick: function (e) {
      let target = e.target;

      if (target.tagName === "BUTTON") {
        this.addBlogPost();
      }
    },
  },
});
