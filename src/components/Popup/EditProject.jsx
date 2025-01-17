import React from 'react';
import {
  Dialog, 
  DialogContent, 
  DialogTitle, 
  TextField, 
  DialogActions, 
  Button, 
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function EditProjectDialog({ editProject, setEditProject, openEditDialog, handleCloseEditDialog,handleUpdate }) {

  const handleEditChange = (prop) => (event) => {
    setEditProject({ ...editProject, [prop]: event.target.value });
  };

  return (
    <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
      <DialogTitle>Edit Project</DialogTitle>
      <DialogContent>
        {/* All your TextField and Select components for project data */}
        {/* Similar to what was previously in ProjectTable */}
        <TextField
          margin="dense"
          id="name"
          label="Project Name"
          type="text"
          fullWidth
          value={editProject?.project_name}
          onChange={handleEditChange('project_name')}
        />
        <TextField
          margin="dense"
          id="start_date"
          label="Start Date"
          type="date"
          fullWidth
          value={editProject?.start_date}
          onChange={handleEditChange('start_date')}
        />
        <TextField
          margin="dense"
          id="end_date"
          label="End Date"
          type="date"
          fullWidth
          value={editProject?.end_date}
          onChange={handleEditChange('end_date')}
        />
        <TextField
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          value={editProject?.description}
          onChange={handleEditChange('description')}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status"
            name="status"
            value={editProject?.status}
            onChange={handleEditChange('status')}
            label="Status"
          >
            <MenuItem value="ACTIVE">ACTIVE</MenuItem>
            <MenuItem value="INACTIVE">INACTIVE</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseEditDialog}>Cancel</Button>
        <Button onClick={handleUpdate}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditProjectDialog;
