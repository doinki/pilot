import type { Meta, StoryObj } from '@storybook/react';

import ExploreOutlined from '../../lib/action/ExploreOutlined';

const meta: Meta<typeof ExploreOutlined> = {
  component: ExploreOutlined,
  tags: ['autodocs'],
  title: 'action/ExploreOutlined',
};

export default meta;
type Story = StoryObj<typeof ExploreOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
