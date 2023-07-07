import type { Meta, StoryObj } from '@storybook/react';

import SpaceBarOutlined from '../../lib/editor/SpaceBarOutlined';

const meta: Meta<typeof SpaceBarOutlined> = {
  component: SpaceBarOutlined,
  tags: ['autodocs'],
  title: 'editor/SpaceBarOutlined',
};

export default meta;
type Story = StoryObj<typeof SpaceBarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
