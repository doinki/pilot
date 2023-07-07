import type { Meta, StoryObj } from '@storybook/react';

import AddAlertOutlined from '../../lib/alert/AddAlertOutlined';

const meta: Meta<typeof AddAlertOutlined> = {
  component: AddAlertOutlined,
  tags: ['autodocs'],
  title: 'alert/AddAlertOutlined',
};

export default meta;
type Story = StoryObj<typeof AddAlertOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
