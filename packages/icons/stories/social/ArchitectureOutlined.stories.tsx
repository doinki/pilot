import type { Meta, StoryObj } from '@storybook/react';

import ArchitectureOutlined from '../../lib/social/ArchitectureOutlined';

const meta: Meta<typeof ArchitectureOutlined> = {
  component: ArchitectureOutlined,
  tags: ['autodocs'],
  title: 'social/ArchitectureOutlined',
};

export default meta;
type Story = StoryObj<typeof ArchitectureOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
