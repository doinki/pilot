import type { Meta, StoryObj } from '@storybook/react';

import BlenderOutlined from '../../lib/search/BlenderOutlined';

const meta: Meta<typeof BlenderOutlined> = {
  component: BlenderOutlined,
  tags: ['autodocs'],
  title: 'search/BlenderOutlined',
};

export default meta;
type Story = StoryObj<typeof BlenderOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
