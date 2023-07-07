import type { Meta, StoryObj } from '@storybook/react';

import AddToDriveOutlined from '../../lib/action/AddToDriveOutlined';

const meta: Meta<typeof AddToDriveOutlined> = {
  component: AddToDriveOutlined,
  tags: ['autodocs'],
  title: 'action/AddToDriveOutlined',
};

export default meta;
type Story = StoryObj<typeof AddToDriveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
