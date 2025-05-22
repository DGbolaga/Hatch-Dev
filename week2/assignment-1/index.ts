// Library Management System
// Description:
// A simple system to manage books and members of a library using OOP principles.

// ----------------- Thought Process / sketch --------------
// Welcome to the Library.
// Sign in as Admin or regular user.
// See list of books available.
// See categories of books shelfs in library.
// See Quantity of books avialable for reading and rent.
// See Status of member of Library.
// See number of members of Library.
// Action to alert Librarian when a book quantity is getting low
// Action to show Librarian percentage of books is most visited.
// Action to ask the user what genre he or she is intrested in.

// Objects:
// 1. Book:
//  Name
//  ID
//  Author
//  Date
//  Quantity
//  Price for renting
//  Rent Duration
//  ----- Methods--------

// 2. Member:
//  Name
//  ID
//  email
//  Date enrolled
//  Status
//  Role (non-admin)
//  ----- Methods--------

// 3. Library Information:
//  Name of Library
//  schedule
//  Borrowing Policy
//  Rent Policy
//  ----- Methods--------

// 4. Feedbacks:
//  Name of respondent
//  Suggested Book name
//  Suggested Book author
//  ----- Methods--------



//Solution

interface IBook {
    id: number;
    name: string;
    author: string;
    dateAdded: Date;
    dateRemoved: Date | null;
    quantity: number;
    rentPrice: number;
    rentDuration: number;
    isAvailable(): boolean;
}

interface IMember {
    id: number;
    name: string;
    email: string;
    dateEnrolled: Date;
    IsAdmin: boolean;
    hasBorrowedBook: boolean;
}

interface IUserDetails {
    name: string;
    email: string;
    isAdmin?: boolean;
}

interface ILibraryInfo {
    name: string;
    schedule: string;
    borrowingPolicy: string;
}


interface IFeedback {
    nameOfRespondent: string;
    emailOfRespondent: string;
    suggestion: string;
    suggestedBookName: string;
    suggestedBookAuthor: string;
}


class User {
    private static count: number = 0
    id: number;
    name: string;
    email: string;
    dateEnrolled?: Date = new Date();
    IsAdmin?: boolean = true;
    hasBorrowedBook?: boolean = false;
    isLoggedIn?: boolean = false;

    constructor(name: string, email: string, dateEnrolled: Date, IsAdmin: boolean, hasBorrowedBook: boolean) {
        this.id = User.counter();
        this.name = name;
        this.email = email;
        this.dateEnrolled = dateEnrolled;
        this.IsAdmin = IsAdmin;
        this.hasBorrowedBook = hasBorrowedBook;
        this.isLoggedIn = false;

    }
    static counter(): number {
        return User.count += 1;
    }

    static validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            console.log("Valid email.")
        }
        else {
            console.log("Error invalid Email...")
        }

        return emailRegex.test(email);
    }

    canBorrowBook(): boolean {
        if (this.hasBorrowedBook === true) {
            return false;
        }
        return true;
    }

    borrowBook(): void {
        this.hasBorrowedBook = true;
    }

    returnBook(): void {
        this.hasBorrowedBook = false;
    }
}



class Book implements IBook {
    private static count: number = 0
    id: number;
    name: string;
    author: string;
    dateAdded: Date;
    dateRemoved: Date | null;
    quantity: number;
    rentPrice: number;
    rentDuration: number;


    constructor(name: string, author: string, quantity: number, rentPrice: number, rentDuration: number, dateRemoved: Date | null = null, dateAdded: Date = new Date()) {
        this.id = Book.counter();
        this.name = name;
        this.author = author;
        this.dateAdded = dateAdded
        this.dateRemoved = dateRemoved;
        this.quantity = quantity;
        this.rentPrice = rentPrice;
        this.rentDuration = rentDuration;

    }

    static counter(): number {
        return Book.count += 1;
    }

    // Additional method
    borrowCopy(): boolean {
        if (this.quantity < 2) {
            return false
        }
        this.quantity -= 1
        //update date removed.
        this.dateRemoved = new Date()
        return true
    }

    isAvailable(): boolean {
        return this.quantity >= 2;
    }
}

class BookBorrowed {
    bookId: number;
    userId: number;
    dateBorrowed: Date;
    dateReturned?: Date;

    constructor(bookId: number, userId: number, dateBorrowed: Date, dateReturned?: Date) {
        this.bookId = bookId;
        this.userId = userId;
        this.dateBorrowed = dateBorrowed;
        this.dateReturned = dateReturned;
    }
}


class LibrarySystem {
    // Manages the books in the Library.
    // add, borrow and register new members
    // track borrowed books
    public name: string;
    private users: User[] = [];
    private books: Book[] = [];
    private booksBorrowed: BookBorrowed[] = []
    private feedbacks: IFeedback[] = []

    constructor(name: string) {
        this.name = name;
    }

    addBook(book: Book): void {
        const currentBook = this.books.find(x => (x.name === book.name && x.author === book.author));

        // add new books or increase the quantity of old books.
        if (currentBook) {
            currentBook.quantity += book.quantity
            console.log("Book already exist. Quantity of Book increased")
        }
        else {
            this.books.push(book)
            console.log(`Book "${book.name}" added successfully.`);
        }


    }

    borrowBook({ userId, bookName, firstAuthor }: { userId: number, bookName: string, firstAuthor: string }): void {
        // borrowBook only if it's available and more than 2 quantity.
        const book = this.books.find(x => (x.name === bookName && x.author === firstAuthor));
        const user = this.users.find(x => x.id === userId);

        //Check if the user is a member.
        if (!user) {
            console.log("User is not a member")
            return;
        }
        if (user.canBorrowBook() === false) {
            console.log("You can't borrow more than one book. Return the book in your custody inorder to get a new one.")
            return;
        }

        // If book not found, return nothing
        if (!book) {
            console.log(`The book titled : ${bookName} by ${firstAuthor}, was not found.`)
            return;
        }
        // If only one copy remains, decline request.
        if (book.isAvailable() === false) {
            console.log(`You can't borrow this book. It is the last copy`)
            return
        }

        // Borrow book
        book.borrowCopy()
        // Update the users status who borrowed the book
        user.borrowBook()
        // Log the transaction
        const borrowedBook = new BookBorrowed(book.id, userId, new Date());
        this.booksBorrowed.push(borrowedBook)
        console.log("Book transacation Logged.")

        console.log(`The book "${book.name}" by "${book.author}" was successfully borrowed.`);
        return;
    }


    returnBook(userId: number, bookName: string, firstAuthor: string): void {
        const bookId: Book | undefined = this.books.find(x => x.name === bookName && x.author === firstAuthor);
        if (!bookId) {
            console.log("This book wasn't borrowed")
            return
        }

        const currentBook: BookBorrowed | undefined = this.booksBorrowed.find(x => (x.bookId === bookId.id && x.userId === userId && x.dateReturned === undefined));

        if (currentBook) {
            currentBook.dateReturned = new Date();

            //find the user and book
            const user = this.users.find(x => x.id === userId);
            const book = this.books.find(x => x.id === bookId.id);


            // Update user record and book record
            if (user) {
                user.returnBook()
            }
            if (book) {
                book.quantity += 1
            }
            console.log('Book returned Successfully.')
        }
        else {
            console.log("This book wasn't borrowed.")
        }
    }

    registerUser(user: IUserDetails): void {
        // Register user if user is new
        const currentUser = this.users.find(x => (x.email === user.email))

        if (!currentUser) {
            // means user is new.
            const newUser = new User(
                user.name,
                user.email,
                new Date(),
                false,
                false,
            )
            //check if email is valid.
            if (User.validateEmail(newUser.email) === true) {
                //add user to Users array.
                this.users.push(newUser)
                console.log(`User "${newUser.name}" is registered successfully.\nYou can now log in.`);
            }

        }
        else {
            console.log("This user already exist.\nWill you like to login instead?")
        }
    }

    loginUser(user: IUserDetails): User | null {
        const currentUser = this.users.find(x => (x.email === user.email))
        if (currentUser) {
            if (currentUser.email === 'admin123@gmail.com') {
                currentUser.IsAdmin = true;
            }
            currentUser.isLoggedIn = true;
            console.log(`Welcome back, ${currentUser.name}!`);
            return currentUser;
        }
        else {
            console.log('Login failed: user not found or wrong credentials');
            return null;
        }

    }

    logoutUser(user: IUserDetails): void {
        const currentUser = this.users.find(x => (x.email === user.email))
        if (currentUser) {
            currentUser.isLoggedIn = false;
            console.log(`User ${currentUser.name} logged out.`);

        }
    }

    giveFeedback(feedback: IFeedback): void {
        this.feedbacks.push(feedback)
        console.log("Feedback successfully logged!")

    }

    viewLibraryCatalogue(user: IUserDetails): void {

        console.log("-------------- The books in store --------------------")
        for (let i = 0; i < this.books.length; i++) {
            console.log(`
                ${i + 1}.
                ---- Book id:       ${this.books[i].id}
                ---- Name:          ${this.books[i].name}
                ---- Author 1:      ${this.books[i].author}
                ---- Date Added:    ${this.books[i].dateAdded}
                ---- Date Removed:  ${this.books[i].dateRemoved}
                ---- Quantity left: ${this.books[i].quantity}
                `)
        }

        console.log("-------------- The books in circulation (lent out) --------------------")
        for (let i = 0; i < this.booksBorrowed.length; i++) {
            const bookInfo: Book | undefined = this.books.find(x => x.id === this.booksBorrowed[i].bookId);
            const userInfo: User | undefined = this.users.find(x => x.id === this.booksBorrowed[i].userId);

            if (bookInfo && userInfo) {
                console.log(`
                ${i + 1}.
                ---- Book id:       ${this.booksBorrowed[i].bookId}
                ---- Name:          ${bookInfo.name}
                ---- Author 1:      ${bookInfo.author}
                ---- Borrowed by:   ${userInfo.name}
                ---- email of User: ${userInfo.email}
                ---- Date Borrowed: ${this.booksBorrowed[i].dateBorrowed}
                ---- Date Returned: ${this.booksBorrowed[i].dateReturned}
                `)
            }
        }


    }

}







// ------------------------------- Main Function --------------------------------
    
// Import readline to get inputs
import readline from 'readline';

function main() {
    const library = new LibrarySystem("NitHub's Software Engineering Library.")

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    // Options functions.
    function printMenu() {
        console.log(`
----------- Welcome to ${LibrarySystem.name} Management System! --------------
What will you like to do today?
Choose an option:
1) Register User
2) Add Book (requires login)
3) Borrow Book (requires login)
4) Return Book (requires login)
5) Login User
6) Logout User (requires login)
7) View Library Information
8) Give Feedback
9) View Library Catalogue (Admin Only)
0) Exit
    `);
    }

    // askQuestion: returns ans as a string
    function askQuestion(query: string): Promise<string> {
        return new Promise(resolve => rl.question(query, answer => resolve(answer)));
    }

    // helper function to delay actions.
    function delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    // helper function to change first letters to title case
    function toTitleCase(str: string): string {
        return str
            .toLowerCase()
            .trim()
            .split(/\s+/) // split by one or more spaces
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }


    // Track current logged-in user (null if none)
    let currentUser: User | null = null;

    async function processInput() {
        while (true) {
            printMenu();
            const choice = await askQuestion('Enter option number: ');

            switch (choice.trim()) {
                case '1': {
                    if (!currentUser) {
                        const name = toTitleCase(await askQuestion('Enter user name: '));
                        const email = await askQuestion('Enter user email: ');
                        library.registerUser({ name, email });

                        // Wait 5 seconds before clearing screen
                        await delay(3000);
                        console.clear();
                        break;
                    }
                    else {
                        console.log("You can't re-register while logged in.")
                        await delay(2500);
                        console.clear();
                        break;
                    }
                }
                case '2': {
                    if (!currentUser) {
                        console.log('You need to login to add a book.');
                        await askQuestion('Press Enter to continue...');
                        console.clear();
                        break;
                    }
                    if (currentUser.IsAdmin === false) {
                        console.log('Only admins can add books.\nKindly drop your book suggestion as a feedback.');
                        await delay(4000);
                        console.clear();
                        break;
                    }
                    const name = toTitleCase(await askQuestion('Enter book name: '));
                    const author = toTitleCase(await askQuestion("Enter author's name: "));
                    const quantityStr = await askQuestion('Enter quantity: ');
                    const rentPriceStr = await askQuestion('Enter rent price ($): ');
                    const rentDurationStr = await askQuestion('Enter rent duration (days): ');

                    const quantity = parseInt(quantityStr);
                    const rentPrice = parseFloat(rentPriceStr);
                    const rentDuration = parseInt(rentDurationStr);

                    const book = new Book(name, author, quantity, rentPrice, rentDuration);
                    library.addBook(book);

                    // Wait 3 seconds before clearing screen
                    await delay(3000);
                    console.clear();
                    break;
                }
                case '3': {
                    if (!currentUser) {
                        console.log('You need to login to borrow a book.');
                        await askQuestion('Press Enter to continue...');
                        console.clear()
                        continue;
                    }
                    const bookName = toTitleCase(await askQuestion('Enter book name: '));
                    const firstAuthor = toTitleCase(await askQuestion("Enter the first author's name: "))


                    library.borrowBook({ userId: currentUser.id, bookName, firstAuthor });
                    // Wait 5 seconds before clearing screen
                    await delay(5000);
                    console.clear();
                    break;
                }
                case '4': {
                    if (!currentUser) {
                        console.log('You need to login to return a book.');
                        await askQuestion('Press Enter to continue...');
                        console.clear()
                        continue;
                    }
                    const bookName = toTitleCase(await askQuestion('Enter book name: '));
                    const firstAuthor = toTitleCase(await askQuestion("Enter first author's name: "));
                    library.returnBook(currentUser.id, bookName, firstAuthor);
                    await delay(3000)
                    console.clear()
                    break;
                }
                case '5': {
                    if (currentUser) {
                        console.log(`Already logged in as ${currentUser.name}. Logout inorder to login as a different user.`);
                        // Wait 5 seconds before clearing screen
                        await delay(5000);
                        console.clear();
                        break;
                    }
                    const name = toTitleCase(await askQuestion('Enter user name: '));
                    const email = await askQuestion('Enter user email: ');
                    const userFound = library.loginUser({ name, email });
                    if (userFound) {
                        currentUser = userFound;
                    }
                    // Wait 5 seconds before clearing screen
                    await delay(3000);
                    console.clear();
                    break;
                }
                case '6': {
                    if (!currentUser) {
                        console.log('You are not logged in.');
                    } else {
                        library.logoutUser(currentUser);
                        currentUser = null;
                    }

                    // Wait 5 seconds before clearing screen
                    await delay(3000);
                    console.clear();
                    break;
                }
                case '7': {
                    const LibraryInfo: ILibraryInfo = {
                        name: library.name,
                        schedule: `Opens Monday to Friday
                                    Time: 9am - 6pm`,
                        borrowingPolicy: "One book at a time."
                    }
                    console.log(`Library: ${LibraryInfo.name}\nSchedule: ${LibraryInfo.schedule}\nBorrowing Policy: ${LibraryInfo.borrowingPolicy}`);
                    await askQuestion("Press Enter to continue...")
                    console.clear();
                    break;
                }
                case '8': {
                    if (!currentUser) {
                        console.log("You must be logged in to give a feedback.")
                        await delay(3000);
                        console.clear();
                        break;
                    }
                    const userfeeback: IFeedback = {
                        nameOfRespondent: currentUser.name,
                        emailOfRespondent: currentUser.email,
                        suggestion: await askQuestion("What's your suggestion: "),
                        suggestedBookName: toTitleCase(await askQuestion("What's the title of your suggested book: ")),
                        suggestedBookAuthor: toTitleCase(await askQuestion("It was written by who?: ")),
                    }

                    library.giveFeedback(userfeeback)
                    await delay(3000);
                    console.clear()

                }
                case '9': {
                    if (!currentUser) {
                        console.log("You must be logged in to view the Library's catalogue.")
                        await delay(3000);
                        console.clear();
                        break;
                    }
                    if (currentUser.IsAdmin === false) {
                        console.log("Admin Only.")
                        await delay(3000);
                        console.clear();
                        break;
                    }

                    library.viewLibraryCatalogue(currentUser);
                    await askQuestion("Press Enter to continue...");
                    console.clear();
                    break;
                }
                case '0': {
                    console.log('Exiting...');
                    rl.close();
                    process.exit(0);
                }
                default:
                    console.log('Invalid option, try again.');
                    // Wait 3 seconds before clearing screen
                    await delay(3000);
                    console.clear();
            }
        }
    }

    processInput();
}

main();



// Acknowledgment: Recieved assistance from ChatGPT with async functions and helper functions
//                 Assisted in clarification of terms.