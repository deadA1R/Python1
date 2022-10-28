from flaskapp import db

class User(db.Model):
    __tablename__ = "users"
    user_id = db.Column(db.Integer, primary_key=True) # integer primary key will be autoincremented by default
    login = db.Column(db.String(255), unique=True, nullable=False)
    user_fname = db.Column(db.String(255))
    user_sname = db.Column(db.String(255))
    password = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), unique=True)
    mobile = db.Column(db.String(255))
    d_of_b = db.Column(db.String(255))
    loc = db.Column(db.String(255))
    info = db.Column(db.Text)
    user_pr = db.relationship("Project", back_populates = "author", cascade="all, delete-orphan")
    
    def __repr__(self) -> str:
        return f"User(user_id {self.user_id!r}, name={self.user_fname!r}, surname={self.user_fname!r})"


class Project(db.Model):
    __tablename__ = "project"
    project_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    text_about = db.Column(db.Text, nullable=False)
    pr_author = db.Column(db.Integer, db.ForeignKey("users.user_id"), nullable=False)

    author = db.relationship("User", back_populates="user_pr")

    def __repr__(self) -> str:
        return super().__repr__()

