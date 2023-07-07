import type { Meta, StoryObj } from '@storybook/react';

import FenceOutlined from '../../lib/places/FenceOutlined';

const meta: Meta<typeof FenceOutlined> = {
  component: FenceOutlined,
  tags: ['autodocs'],
  title: 'places/FenceOutlined',
};

export default meta;
type Story = StoryObj<typeof FenceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
