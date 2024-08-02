CREATE DATABASE TaskManagementSystem;
GO
USE TaskManagementSystem;
GO

-- Create the Users table
CREATE TABLE Users (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    PasswordHash NVARCHAR(256) NOT NULL, -- Store hashed passwords
    Role NVARCHAR(50) NOT NULL
);
GO

-- Create the Tasks table
CREATE TABLE Tasks (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(255) NOT NULL,
    Description NVARCHAR(MAX) NULL,
    DueDate DATE NULL,
    Status NVARCHAR(50) NOT NULL,
    Notes NVARCHAR(MAX) NULL,
    AttachmentUrl NVARCHAR(MAX) NULL,
    AssignedToUserId INT NULL,
    FOREIGN KEY (AssignedToUserId) REFERENCES Users(Id)
);
GO

-- Create an index on DueDate to speed up queries based on task deadlines
CREATE INDEX IX_Tasks_DueDate ON Tasks(DueDate);
GO


 --Insert dummy users
INSERT INTO Users (Name,Email,Role)
VALUES
    ('John Doe', 'john.doe@example.com','Employee'),
    ('Jane Smith', 'jane.smith@example.com', 'Manager'),
    ('Alice Johnson', 'alice.johnson@example.com',  'Admin');

 --Insert dummy tasks
INSERT INTO Tasks (Title, Description, DueDate, Status, Notes, AttachmentUrl, AssignedToEmployeeId)
VALUES
    ('Task 1', 'Description for Task 1', '2024-08-10', 'Pending', 'Notes for Task 1', 'http://example.com/attachment2', 4),
    ('Task 2', 'Description for Task 2', '2024-08-15', 'In Progress', 'Notes for Task 2', 'http://example.com/attachment3', 2),
    ('Task 3', 'Description for Task 3', '2024-08-20', 'Completed', 'Notes for Task 3', 'http://example.com/attachment1', 5);

 --Insert dummy reports
INSERT INTO Reports (TeamName,TaskCount,CompletedTasks,PendingTasks,Period)
VALUES
    ('TeamC',5,2,3,'Weekly'),
    ('TeamD',2,1,1,'Monthly');