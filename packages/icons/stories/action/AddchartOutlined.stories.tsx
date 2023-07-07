import type { Meta, StoryObj } from '@storybook/react';

import AddchartOutlined from '../../lib/action/AddchartOutlined';

const meta: Meta<typeof AddchartOutlined> = {
  component: AddchartOutlined,
  tags: ['autodocs'],
  title: 'action/AddchartOutlined',
};

export default meta;
type Story = StoryObj<typeof AddchartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
