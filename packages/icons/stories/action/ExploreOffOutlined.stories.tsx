import type { Meta, StoryObj } from '@storybook/react';

import ExploreOffOutlined from '../../lib/action/ExploreOffOutlined';

const meta: Meta<typeof ExploreOffOutlined> = {
  component: ExploreOffOutlined,
  tags: ['autodocs'],
  title: 'action/ExploreOffOutlined',
};

export default meta;
type Story = StoryObj<typeof ExploreOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
