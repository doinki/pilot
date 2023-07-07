import type { Meta, StoryObj } from '@storybook/react';

import ChildFriendlyOutlined from '../../lib/places/ChildFriendlyOutlined';

const meta: Meta<typeof ChildFriendlyOutlined> = {
  component: ChildFriendlyOutlined,
  tags: ['autodocs'],
  title: 'places/ChildFriendlyOutlined',
};

export default meta;
type Story = StoryObj<typeof ChildFriendlyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
