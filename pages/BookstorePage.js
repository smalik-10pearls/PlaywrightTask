

class BookstorePage {

    constructor(page) {
        this.page = page;
        this.searchField= page.locator('input[id="searchBox"]');
        this.filteredBook= page.locator('[id="see-book-Git Pocket Guide"]');
    }

    enterTextInSearch = async (book) => {
        await this.searchField.fill(book);
      }

    verifyBookInListing = async () => {
        const searchBook= await this.filteredBook.innerText();
        return searchBook;
    }

}

module.exports = BookstorePage;

