import type { Meta, StoryObj } from '@storybook/react';

import SportsMmaOutlined from '../../lib/social/SportsMmaOutlined';

const meta: Meta<typeof SportsMmaOutlined> = {
  component: SportsMmaOutlined,
  tags: ['autodocs'],
  title: 'social/SportsMmaOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsMmaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
