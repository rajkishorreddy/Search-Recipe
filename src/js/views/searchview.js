class SearchView {
  _parentEL = document.querySelector('.search');
  getQuery() {
    const query = this._parentEL.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
  addHandlerSearch(handler) {
    this._parentEL.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
  _clearInput() {
    this._parentEL.querySelector('.search__field').value = '';
  }
}
export default new SearchView();
