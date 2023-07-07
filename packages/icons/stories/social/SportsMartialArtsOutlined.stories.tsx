import type { Meta, StoryObj } from '@storybook/react';

import SportsMartialArtsOutlined from '../../lib/social/SportsMartialArtsOutlined';

const meta: Meta<typeof SportsMartialArtsOutlined> = {
  component: SportsMartialArtsOutlined,
  tags: ['autodocs'],
  title: 'social/SportsMartialArtsOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsMartialArtsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
