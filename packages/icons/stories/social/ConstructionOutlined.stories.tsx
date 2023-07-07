import type { Meta, StoryObj } from '@storybook/react';

import ConstructionOutlined from '../../lib/social/ConstructionOutlined';

const meta: Meta<typeof ConstructionOutlined> = {
  component: ConstructionOutlined,
  tags: ['autodocs'],
  title: 'social/ConstructionOutlined',
};

export default meta;
type Story = StoryObj<typeof ConstructionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
