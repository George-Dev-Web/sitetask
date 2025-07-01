# seed.py
from app import db, User, Project, Task
from app import app  # your main Flask app

def seed():
    with app.app_context():
        print("🌱 Seeding database...")

        # Clear old data
        Task.query.delete()
        Project.query.delete()
        User.query.delete()
        db.session.commit()

        # Seed users
        user1 = User(username="alice", email="alice@gmail.com", role="engineer")
        user1.set_password("password123")

        user2 = User(username="bob", email="bob@gmail.com", role="supervisor")
        user2.set_password("password456")

        db.session.add_all([user1, user2])
        db.session.commit()

        # Seed projects
        proj1 = Project(name="Bridge Construction", description="Design and build the new bridge", user_id=user1.id)
        proj2 = Project(name="Road Maintenance", description="Fix potholes along the highway", user_id=user2.id)

        db.session.add_all([proj1, proj2])
        db.session.commit()

        # Seed tasks
        task1 = Task(title="Pour concrete", status="In Progress", project_id=proj1.id)
        task2 = Task(title="Inspect steel", status="Not Started", project_id=proj1.id)
        task3 = Task(title="Fix potholes", status="Completed", project_id=proj2.id)

        db.session.add_all([task1, task2, task3])
        db.session.commit()

        print("✅ Database seeded successfully!")

if __name__ == "__main__":
    seed()
