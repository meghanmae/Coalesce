/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../Coalesce/intellitect.utilities.ts" />
/// <reference path="../Coalesce/intellitect.ko.utilities.ts" />
/// <reference path="../Coalesce/intellitect.ko.base.ts" />



// Knockout View Model for: CaseProduct
// Auto Generated Knockout Object Bindings
// Copyright IntelliTect, 2016

var baseUrl = baseUrl || '';
var saveTimeoutInMs = saveTimeoutInMs || 500;

module ViewModels {
    export var areaUrl = areaUrl || ((true) ? baseUrl : baseUrl + '/');

	export class CaseProduct
    {
        private loadingCount: number = 0;  // Stack for number of times loading has been called.
        private saveTimeout: number = 0;   // Stores the return value of setInterval for automatic save delays.
        // Callbacks to call after a delete.
        public deleteCallbacks: { ( myself: CaseProduct ): void; } [] = [];
        // Callbacks to call after a save.
        public saveCallbacks: { ( myself: CaseProduct ): void; } [] = [];    
        private loadingValidValues: number = 0;

        // String that defines what data should be included with the returned object.
        public includes = null;
        // The custom code to run in order to pull the initial datasource to use for the object that should be returned
        public dataSource: ListViewModels.CaseProductDataSources = ListViewModels.CaseProductDataSources.Default;
        // If true, the busy indicator is shown when loading.
        public showBusyWhenSaving = false;  // If true a busy indicator shows when saving.
        // Whether or not alerts should be shown when loading fails.
        public showFailureAlerts: boolean = true;

        // Parent of this object.
        public parent = null;
        // Collection that this object is a part of.
        public parentCollection = null;
        // ID of the object.
        public myId: any = 0;

        // Dirty Flag
        public isDirty: KnockoutObservable<boolean> = ko.observable(false);
        // Error message for the page
        public errorMessage: KnockoutObservable<string> = ko.observable(null);
        // ValidationIssues returned from database when trying to persist data
        public validationIssues: any = ko.observableArray([]);
        // If this is true, all changes will be saved automatically.
        public isSavingAutomatically = true;
        // Flag to use to determine if this item is shown. Only for convenience.
        public isVisible: KnockoutObservable<boolean> = ko.observable(false);
        // Flag to use to determine if this item is expanded. Only for convenience.
        public isExpanded: KnockoutObservable<boolean> = ko.observable(false);
        // Flag to use to determine if this item is selected. Only for convenience.
        public isSelected: KnockoutObservable<boolean> = ko.observable(false);
        // Flag to use to determine if this item is checked. Only for convenience.
        public isChecked: KnockoutObservable<boolean> = ko.observable(false);
        // Alternates the isExpanded flag. Use with a click binding for a button.
        public changeIsExpanded: (value?: boolean) => void;
        // Flag to use to determine if this item is being edited. Only for convenience.
        public isEditing = ko.observable(false);
        // Alternates the isEditing flag. Use with a click binding for a button.
        public changeIsEditing: (value?: boolean) => void;
        // List of errors found during validation.
        public errors: any = ko.observableArray([]);
        // List of warnings found during validation. These allow a save.
        public warnings: any = ko.observableArray([]);
        // Custom Field that can be used via scripts. This allows for setting observables via scripts and using them without modifying the ViewModel
        public customField1: KnockoutObservable<any> = ko.observable();
        // Custom Field 2 that can be used via scripts. This allows for setting observables via scripts and using them without modifying the ViewModel
        public customField2: KnockoutObservable<any> = ko.observable();
        // Custom Field 3 that can be used via scripts. This allows for setting observables via scripts and using them without modifying the ViewModel
        public customField3: KnockoutObservable<any> = ko.observable();


        // True if the object is currently saving.
        public isSaving: KnockoutObservable<boolean> = ko.observable(false);
        // Internal count of child objects that are saving.
        public savingChildCount: KnockoutObservable<number> = ko.observable(0);
        // True if the object or any of its children are currently saving.
        public isSavingWithChildren: () => boolean;
        // Internally used member to count the number of saving children.
        public savingChildChange: (isSaving: boolean) => void;

        // Set this false when editing a field that saves periodically while the user is typing. 
        // By default(null), isDataFromSaveLoadedComputed will check the parent's value. 
        // If the topmost parent is null, the value is true. Otherwise the first set value will be returned.
        public isDataFromSaveLoaded: boolean = null;
        // Used internally to determine if the data from a save operation should be loaded.
        public isDataFromSaveLoadedComputed: () => boolean;
        public isValid: () => boolean;
    
        // Observables
        public caseProductId: KnockoutObservable<number> = ko.observable(null);
        public caseId: KnockoutObservable<number> = ko.observable(null);
        public case: KnockoutObservable<ViewModels.Case> = ko.observable(null);
        public productId: KnockoutObservable<number> = ko.observable(null);
        public product: KnockoutObservable<ViewModels.Product> = ko.observable(null);

       
        // True if the object is loading.
        public isLoading: KnockoutObservable<boolean> = ko.observable(false);
        // True once the data has been loaded.
		public isLoaded: KnockoutObservable<boolean> = ko.observable(false);
        // URL to a stock editor for this object.
        public editUrl: () => string;
        // Create computeds for display for objects
        public caseText: () => string;
        public productText: () => string;
        // Loads this object from a data transfer object received from the server.
        // Force: Will override the check against isLoading that is done to prevent recursion.
        // AllowCollectionDeletes: Set true when entire collections are loaded. True is the default. In some cases only a partial collection is returned, set to false to only add/update collections.
        public loadFromDto: (data: any, force?: boolean, allowCollectionDeletes?: boolean) => void;
        // Saves this object into a data transfer object to send to the server.
        public saveToDto: () => any;
        // Saves the object to the server and then calls the callback.
        public save: (callback?: any) => void;
        // Validates the model.
        public validate: () => boolean;
        // Loads the object from the server based on the id specified. Once complete calls the callback.
        public load: (id: any, callback?: any) => void
        // Reloads the object from the server.
        public reload: (callback?: any) => void;
        // Deletes the object after a user confirmation. Bind this to delete buttons.
        public deleteItemWithConfirmation: (callback?: any, message?: string) => void;
        // Deletes the object without confirmation.
        public deleteItem: (callback?: any) => void;
        
        
        // Saves a many-to-many collection change. This is done automatically and doesn't need to be called.
        public saveCollection: (propertyName, childId, operation)  => void;
        // Callback to be called when this item is deleted.
        public onDelete: (fn: any) => void;
        // Callback to be called when a save is done.
        public onSave: (fn: any) => void;
        // If true, changes to the object are saved automatically. If false, save() needs to be called.
        public autoSave: () => void;
        // If true, many-to-many collections are automatically saved.
        public autoSaveCollection: (property: string, id: any, changeStatus: string) => void;
                public caseValidValues: KnockoutObservableArray<any> = ko.observableArray([]);
        public loadCaseValidValues: (callback?: any) => void;
        public productValidValues: KnockoutObservableArray<any> = ko.observableArray([]);
        public loadProductValidValues: (callback?: any) => void;
        // Pops up a stock editor for this object.
        public showEditor: () => void;
        public showCaseEditor: () => void;
        public showProductEditor: () => void;
        // Loads collections of valid values. May be removed.
        public loadValidValues: (callback?: any) => void;
        // Loads any children that have an ID but have not been loaded. 
        // This is useful when creating an object that has a parent object and the ID is set on the new child.
        public loadChildren: (callback?: any) => void;
        // Selects this item and deselects other items in the parentCollection.
        public selectSingle: () => boolean;
        public isSelectedToggle: () => boolean;



        
        public originalData: KnockoutObservable<any> = ko.observable(null);
        
        // This method gets called during the constructor. This allows injecting new methods into the class that use the self variable.
        public init(myself: CaseProduct) {};

        constructor(newItem?: any, parent?: any){
            var self = this;
            self.parent = parent;
            self.myId;
            // Call an init function that allows for proper inheritance.
            if ($.isFunction(self.init)){
                self.init(self);
            }
            
            ko.validation.init({
                grouping: {
                    deep: true,
                    live: true,
                    observable: true
                }
            });

            // SetupValidation {
			self.caseId = self.caseId.extend({ required: {params: true, message: "Case is required."} });
			self.productId = self.productId.extend({ required: {params: true, message: "Product is required."} });
            
            self.errors = ko.validation.group([
                self.caseProductId,
                self.caseId,
                self.case,
                self.productId,
                self.product,
            ]);
            self.warnings = ko.validation.group([
            ]);

            self.changeIsExpanded = function(value?: boolean) { // Call this with the edit button.
                if (value !== true || value !== false) self.isExpanded(!self.isExpanded());
                else self.isExpanded(value === true); // Force boolean
            };
            self.changeIsEditing = function (value){  // Call this with the edit button.
                if (value !== true || value !== false) self.isEditing(!self.isEditing());
                else self.isEditing(value === true);  // Force boolean
            };

            // Computed Observable for edit URL
            self.editUrl = ko.computed(function() {
                return areaUrl + "CaseProduct/CreateEdit?id=" + self.caseProductId();
            });

            // Create computeds for display for objects
			self.caseText = ko.computed(function()
			{   // If the object exists, use the text value. Otherwise show 'None'
				if (self.case() && self.case().caseKey()) {
					return self.case().caseKey().toString();
				} else {
					return "None";
				}
			});
			self.productText = ko.computed(function()
			{   // If the object exists, use the text value. Otherwise show 'None'
				if (self.product() && self.product().name()) {
					return self.product().name().toString();
				} else {
					return "None";
				}
			});


            // Load the ViewModel object from the DTO. 
            // Force: Will override the check against isLoading that is done to prevent recursion. False is default.
            // AllowCollectionDeletes: Set true when entire collections are loaded. True is the default. In some cases only a partial collection is returned, set to false to only add/update collections.
			self.loadFromDto = function(data: any, force: boolean = false, allowCollectionDeletes: boolean = true) {
				if (!data || (!force && self.isLoading())) return;
				self.isLoading(true);
				// Set the ID 
				self.myId = data.caseProductId;
				// Load the lists of other objects
				// Objects are loaded first so that they are available when the IDs get loaded.
				// This handles the issue with populating select lists with correct data because we now have the object.
				if (!data.case) { 
					if (data.caseId != self.caseId()) {
                        self.case(null);
                    }
                }else {
                    if (!self.case()){
					    self.case(new Case(data.case, self));
				    }else{
					    self.case().loadFromDto(data.case);
				    }
                    if (self.parent && self.parent.myId == self.case().myId && intellitect.utilities.getClassName(self.parent) == intellitect.utilities.getClassName(self.case()))
                    {
                        self.parent.loadFromDto(data.case, undefined, false);
                    }
                }
				if (!data.product) { 
					if (data.productId != self.productId()) {
                        self.product(null);
                    }
                }else {
                    if (!self.product()){
					    self.product(new Product(data.product, self));
				    }else{
					    self.product().loadFromDto(data.product);
				    }
                    if (self.parent && self.parent.myId == self.product().myId && intellitect.utilities.getClassName(self.parent) == intellitect.utilities.getClassName(self.product()))
                    {
                        self.parent.loadFromDto(data.product, undefined, false);
                    }
                }

				// The rest of the objects are loaded now.
				self.caseProductId(data.caseProductId);
				self.caseId(data.caseId);
				self.productId(data.productId);
				self.isLoading(false);
				self.isDirty(false);
                self.validate();
			};

    	    // Save the object into a DTO
			self.saveToDto = function() {
				var dto: any = {};
				dto.caseProductId = self.caseProductId();

				dto.caseId = self.caseId();
				if (!dto.caseId && self.case()) {
				    dto.caseId = self.case().caseKey();
				}
				dto.productId = self.productId();
				if (!dto.productId && self.product()) {
				    dto.productId = self.product().productId();
				}

				return dto;
			}

			self.save = function(callback?: any) {
				if (!self.isLoading()) {
					if (self.validate()) {
						if (self.showBusyWhenSaving) intellitect.utilities.showBusy();
						self.isSaving(true);
                        $.ajax({ method: "POST", url: areaUrl + "api/CaseProduct/Save?includes=" + self.includes, data: self.saveToDto(), xhrFields: { withCredentials: true } })
						.done(function(data) {
							self.isDirty(false);
							self.errorMessage('');
                            if (self.isDataFromSaveLoadedComputed()) {
								self.loadFromDto(data.object, true);
                            }
							// The object is now saved. Call any callback.
							for (var i in self.saveCallbacks) {
								self.saveCallbacks[i](self);
							}
						})
						.fail(function(xhr) {
                            var errorMsg = "Unknown Error";
                            var validationIssues = [];
                            if (xhr.responseJSON && xhr.responseJSON.message) errorMsg = xhr.responseJSON.message;
                            if (xhr.responseJSON && xhr.responseJSON.validationIssues) validationIssues = xhr.responseJSON.validationIssues;
                            self.errorMessage(errorMsg);
                            self.validationIssues(validationIssues);
                            // If an object was returned, load that object.
                            if (xhr.responseJSON && xhr.responseJSON.object){
                                self.loadFromDto(xhr.responseJSON.object, true);
                            }
                            if (self.showFailureAlerts)
                                alert("Could not save the item: " + errorMsg);
						})
						.always(function() {
							self.isSaving(false);
							if ($.isFunction(callback)) {
								callback();
							}
							if (self.showBusyWhenSaving) intellitect.utilities.hideBusy();
						});
					}
                    else
                    {
                        // If validation fails, we still want to try and load any child objects which may have just been set.
                        // Normally, we get these from the result of the save.
                        self.loadChildren();
                    }
				}
			}

			// Assign this function to add validation that prevents saving  by returning false.
			// Return true to continue to save.
			self.validate = function() { 
                self.errors.showAllMessages();
                self.warnings.showAllMessages();
                return self.errors().length == 0;
            };

			// Loads an item.
			self.load = function(id: any, callback?) {
                if (!id) {
                    id = self.caseProductId();
                }
                if (id) {
                    self.isLoading(true);
                    intellitect.utilities.showBusy();

                    var url = areaUrl + "api/CaseProduct/Get/" + id + '?includes=' + self.includes + '&dataSource=';
                    if (typeof self.dataSource === "string") url += self.dataSource;
                    else url += ListViewModels.CaseProductDataSources[self.dataSource];

                    $.ajax({ method: "GET", url: url, xhrFields: { withCredentials: true } })
                        .done(function(data) {
                            self.loadFromDto(data, true);
                            self.isLoaded(true);
                            if ($.isFunction(callback)) callback(self);
                        })
                        .fail(function() {
                            self.isLoaded(false);
                            if (self.showFailureAlerts)
                                alert("Could not get CaseProduct with id = " + id);
                        })
                        .always(function() {
                            intellitect.utilities.hideBusy();
                            self.isLoading(false);
                        });
                }
            };

            self.reload = function(callback) {
                self.load(self.caseProductId(), callback);
            };

            // Deletes the object after a confirmation box.
            self.deleteItemWithConfirmation = function(callback, message) {
                if (typeof message != 'string') {
                    message = "Delete this item?";
                }
                if (confirm(message)) {
                    self.deleteItem(callback);
                }
            };

            // Deletes the object
            self.deleteItem = function(callback) {
                var currentId = self.caseProductId();
                if (currentId){
                $.ajax({ method: "POST", url: areaUrl+ "api/CaseProduct/Delete/" + currentId, xhrFields: { withCredentials: true } })
                .done(function(data) {
                    if (data) {
                        self.errorMessage('');
                        // The object is now deleted. Call any callback.
                        for (var i in self.deleteCallbacks) {
                            self.deleteCallbacks[i](self);
                        }
                        // Remove it from the parent collection
                        if (self.parentCollection && self.parent) {
                            self.parent.isLoading(true);
                            self.parentCollection.splice(self.parentCollection().indexOf(self),1);
                            self.parent.isLoading(false);
                        }
                    } else {
                        self.errorMessage(data.message);
                    }
                })
                .fail(function() {
                    if (self.showFailureAlerts)
                        alert("Could not delete the item.");
                })
                .always(function() {
                    if ($.isFunction(callback)) {
                        callback(callback);
                    }
                });
                }else{
                    // No ID has been assigned yet, just remove it.
                    if (self.parentCollection && self.parent) {
                        self.parent.isLoading(true);
                        self.parentCollection.splice(self.parentCollection().indexOf(self),1);
                        self.parent.isLoading(false);
                    }
                    if ($.isFunction(callback)) {
                        callback(callback);
                    }
                }
            };

            // Sets isSelected(true) on this object and clears on the rest of the items in the parentCollection. Returns true to bubble additional click events.
            self.selectSingle = function () {
                if (self.parentCollection()) {
                    $.each(self.parentCollection(), function (i, obj) {
                        obj.isSelected(false);
                    });
                }
                self.isSelected(true);
                return true; // Allow other click events
            };

            // Toggles isSelected value. Returns true to bubble additional click events.
            self.isSelectedToggle = function() {
                self.isSelected(!self.isSelected());
                return true;
            }

            // Methods to add to child collections


            // Save a many-to-many collection
            self.saveCollection = function(propertyName, childId, operation) {
                var method = (operation === "added" ? "AddToCollection" : "RemoveFromCollection");
                var currentId = self.caseProductId();
                $.ajax({ method: "POST", url: areaUrl + 'api/CaseProduct/' + method + '?id=' + currentId + '&propertyName=' + propertyName + '&childId=' + childId, xhrFields: { withCredentials: true } })
                .done(function(data) {
                    self.errorMessage('');
                    self.loadFromDto(data.object, true);
                    // The object is now saved. Call any callback.
                    for (var i in self.saveCallbacks) {
                        self.saveCallbacks[i](self);
                    }
                })
                .fail(function(xhr) {
                    var errorMsg = "Unknown Error";
                    var validationIssues = [];
                    if (xhr.responseJSON && xhr.responseJSON.message) errorMsg = xhr.responseJSON.message;
                    if (xhr.responseJSON && xhr.responseJSON.validationIssues) errorMsg = xhr.responseJSON.validationIssues;
                    self.errorMessage(errorMsg);
                    self.validationIssues(validationIssues);

                    if (self.showFailureAlerts)
                        alert("Could not save the item: " + errorMsg);
                })
                .always(function() {
                    // Nothing here yet.
                });
            };

            // Call this function when the object is deleted.
            self.onDelete = function(fn) {
                if ($.isFunction(fn)) self.deleteCallbacks.push(fn);
            };
            self.onSave = function(fn) {
                if ($.isFunction(fn)) self.saveCallbacks.push(fn);
            };

            // Saves the object is autoSave is true.
            self.autoSave = function() {
                if (!self.isLoading()){
                    self.isDirty(true);
                    if (self.isSavingAutomatically) {
                        // Batch saves.
                        if (!self.saveTimeout) {
                            self.saveTimeout = setTimeout(function() {
                                self.saveTimeout = 0;
                                // If we have a save in progress, wait...
                                if (self.isSaving()) {
                                    self.autoSave();
                                }else{
                                    self.save();
                                }
                            }, saveTimeoutInMs);
                        }
                    }
                }
            }

            // Saves the object is autoSave is true.
            self.autoSaveCollection = function(property, id, changeStatus) {
                if (!self.isLoading()) {
                    // TODO: Eventually Batch saves for many-to-many collections.
                    if (changeStatus === 'added') {
                        self.saveCollection(property, id, "added");
                    }else if (changeStatus === 'deleted') {
                        self.saveCollection(property, id, "deleted");
                    }
                }
            }

            // Save on changes
            function setupSubscriptions() {
                self.caseId.subscribe(self.autoSave);
                self.case.subscribe(self.autoSave);
                self.productId.subscribe(self.autoSave);
                self.product.subscribe(self.autoSave);
            }  

            // Create variables for ListEditorApiUrls
            // Create loading function for Valid Values

            self.loadCaseValidValues = function(callback) {
                self.loadingValidValues++;
                $.ajax({ method: "GET", url: areaUrl + "api/Case/CustomList?Fields=CaseKey,CaseKey", xhrFields: { withCredentials: true } })
                .done(function(data) {
                    self.isLoading(true);
                    self.caseValidValues(data.list);
                    self.isLoading(false);
                })
                .fail(function(xhr) {
                    var errorMsg = "Unknown Error";
                    if (xhr.responseJSON && xhr.responseJSON.message) errorMsg = xhr.responseJSON.message;
                    self.isLoading(false);

                    if (self.showFailureAlerts)
                        alert("Could not get Valid Values for Case: " + errorMsg);
                })
                .always(function(){
                    self.loadingValidValues--;
                    if (self.loadingValidValues === 0) {
                        if ($.isFunction(callback)) {callback();}
                    }
                });
            }
            
            self.loadProductValidValues = function(callback) {
                self.loadingValidValues++;
                $.ajax({ method: "GET", url: areaUrl + "api/Product/CustomList?Fields=ProductId,Name", xhrFields: { withCredentials: true } })
                .done(function(data) {
                    self.isLoading(true);
                    self.productValidValues(data.list);
                    self.isLoading(false);
                })
                .fail(function(xhr) {
                    var errorMsg = "Unknown Error";
                    if (xhr.responseJSON && xhr.responseJSON.message) errorMsg = xhr.responseJSON.message;
                    self.isLoading(false);

                    if (self.showFailureAlerts)
                        alert("Could not get Valid Values for Product: " + errorMsg);
                })
                .always(function(){
                    self.loadingValidValues--;
                    if (self.loadingValidValues === 0) {
                        if ($.isFunction(callback)) {callback();}
                    }
                });
            }
            
            // Supply methods to pop up a model editor
            self.showEditor = function(){
                // Close any existing modal
                $('#modal-dialog').modal('hide');
                // Get new modal content
                intellitect.utilities.showBusy();
                $.ajax({ method: "GET", url: areaUrl + 'CaseProduct/EditorHtml', data: {simple: true}, xhrFields: { withCredentials: true } })
                .done(function(data){
                    // Add to DOM
                    intellitect.webApi.setupModal('Edit Case Product', data, true, false);
                    // Data bind
                    var lastValue = self.isSavingAutomatically;
                    self.isSavingAutomatically = false;
                    ko.applyBindings(self, document.getElementById("modal-dialog"));
                    self.isSavingAutomatically = lastValue;
                    // Show the dialog
                    $('#modal-dialog').modal('show');
                })
                .always(function() {
                    intellitect.utilities.hideBusy();
                });
            }

            self.showCaseEditor = function() {
                if (!self.case()) {
                    self.case(new Case());
                }
                self.case().showEditor()
            };
            self.showProductEditor = function() {
                if (!self.product()) {
                    self.product(new Product());
                }
                self.product().showEditor()
            };

            // Load all child objects that are not loaded.
            self.loadChildren = function(callback) {
                var loadingCount = 0;
                var obj;
                // See if self.case needs to be loaded.
                if (self.case() == null && self.caseId() != null){
                    loadingCount++;
                    obj = new Case();
                    obj.load(self.caseId(), function() {
                        loadingCount--;
                        self.case(obj);
                        if (loadingCount == 0 && $.isFunction(callback)){
                            callback();
                        }
                    });
                }
                // See if self.product needs to be loaded.
                if (self.product() == null && self.productId() != null){
                    loadingCount++;
                    obj = new Product();
                    obj.load(self.productId(), function() {
                        loadingCount--;
                        self.product(obj);
                        if (loadingCount == 0 && $.isFunction(callback)){
                            callback();
                        }
                    });
                }
                if (loadingCount == 0 && $.isFunction(callback)){
                    callback();
                }
            };



            // Load all the valid values in parallel.
            self.loadValidValues = function(callback) {
                self.loadingValidValues = 0;
                self.loadCaseValidValues(callback);
                self.loadProductValidValues(callback);
            };

            // Enumeration Lookups.

            // Code to handle saving flags.
            // Returns true if this object or any of its children is saving.
            self.isSavingWithChildren = ko.computed(function() {
                if (self.isSaving()) return true;
                if (self.savingChildCount() > 0 ) return true;
                return false;
            });
            // Handles setting the parent savingChildChange
            self.isSaving.subscribe(function(newValue: boolean){
                if (self.parent && $.isFunction(self.parent.savingChildChange)){
                    self.parent.savingChildChange(newValue);
                }
            })
            // Handle children that are saving.
            self.savingChildChange = function(isSaving: boolean){
                if (isSaving) self.savingChildCount(self.savingChildCount() + 1);
                else self.savingChildCount(self.savingChildCount() - 1);
                if (self.parent && $.isFunction(self.parent.savingChildChange)){
                    self.parent.savingChildChange(isSaving);
                }
            }

            // Code to handle isDataFromSaveLoaded
            self.isDataFromSaveLoadedComputed = function() {
                if (self.isDataFromSaveLoaded === false) return false;
                if (self.isDataFromSaveLoaded === true) return true;
                if (self.parent && $.isFunction(self.parent.isDataFromSaveLoadedComputed)){
                    return self.parent.isDataFromSaveLoadedComputed();
                }
                return true;
            }


            // Method Implementations


            // This stuff needs to be done after everything else is set up.
            // Complex Type Observables

            // Make sure everything is defined before we call this.
            setupSubscriptions();

            if (newItem) {
                if ($.isNumeric(newItem)) self.load(newItem);
                else self.loadFromDto(newItem, true);
            }



        }
    }





    export namespace CaseProduct {

        // Classes for use in method calls to support data binding for input for arguments
    }
}