import type { Meta, StoryObj } from '@storybook/react';

import PublishedWithChangesOutlined from '../../lib/action/PublishedWithChangesOutlined';

const meta: Meta<typeof PublishedWithChangesOutlined> = {
  component: PublishedWithChangesOutlined,
  tags: ['autodocs'],
  title: 'action/PublishedWithChangesOutlined',
};

export default meta;
type Story = StoryObj<typeof PublishedWithChangesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
