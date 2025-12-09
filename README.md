💰 MyPocket : https://my-pocket-rho.vercel.app/
-----------

### **Project Overview**

**MyPocket** is a minimalist, single-page web application designed to help users track and control their personal finances by managing expenses against a set budget. This mini-project offers a straightforward interface where users can set their budget, log individual expenses, and instantly see the impact on their remaining funds.

The goal of **MyPocket** is to provide a quick and easy way for people to visualize where their money goes and maintain control over their spending habits.

### **✨ Features**

*   **User Profile Setup:** Users enter their **First Name** and **Last Name**.
    
*   **Budget Initialization:** Users set their initial **Budget** amount.
    
*   **Expense Tracking:** Users can add new expenses with a **Name** and **Amount**.
    
*   **Real-time Visualization:** The remaining budget is automatically updated and displayed after every expense entry.
    
*   **Expense List:** All added expenses are listed for easy review.
    
*   **Local Storage Persistence:** All user data (profile, budget, and expenses) are saved directly in the user's browser using **Local Storage**, ensuring data persists across sessions.
    

### **🛠️ Technologies Used**

This project is built purely using front-end technologies, making it very easy to deploy and run.

*   **Core:** **HTML5** (Structure)
    
*   **Styling:** **CSS3** (Visual presentation)
    
*   **Logic:** **JavaScript** (Handling user input, calculations, DOM manipulation, and Local Storage management)
    

### **🚀 Getting Started**

Since **MyPocket** is a front-end-only application, getting started is extremely simple.

#### **Prerequisites**

You only need a modern web browser (Chrome, Firefox, Edge, etc.).

#### **Installation**

1.  Bash : git clone https://github.com/MyPocket/MyPocket.git
2.  cd MyPocket
    
3.  **Open the application:**
    
    *   Locate the main HTML file (index.html) in the project directory.
        
    *   Double-click on index.html to open it in your web browser.
        

### **🖥️ Usage**

The application flow is divided into two main interfaces:

#### **1\. Setup Interface**

*   Upon first launch, or if Local Storage data is cleared, you will be prompted to set up your profile.
    
*   Enter your **First Name**, **Last Name**, and your initial **Budget** amount.
    
*   Click a button (e.g., "Start Tracking") to proceed.
    

#### **2\. Expense Tracking Interface**

*   **Budget Display:** This interface shows your initialized budget and the **Remaining Budget** (which decreases as expenses are added).
    
*   **Add Expense:** Use the input fields to enter the **Expense Name** and the **Amount** spent.
    
*   **Expense List:** All recorded expenses are displayed in a list below the tracking area.
    
*   **Data Persistence:** Refreshing the page will reload all your profile data and expenses, as they are saved in your browser's Local Storage.
    

### **⚠️ Note on Storage**

Data in **MyPocket** is stored using **Local Storage**. This means:

*   Your data is only available on the specific browser and device you are using.
    
*   Clearing your browser's cache or local storage will permanently delete all your saved budget and expense data.
