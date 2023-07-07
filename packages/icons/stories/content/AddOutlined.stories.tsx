import type { Meta, StoryObj } from '@storybook/react';

import AddOutlined from '../../lib/content/AddOutlined';

const meta: Meta<typeof AddOutlined> = {
  component: AddOutlined,
  tags: ['autodocs'],
  title: 'content/AddOutlined',
};

export default meta;
type Story = StoryObj<typeof AddOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
