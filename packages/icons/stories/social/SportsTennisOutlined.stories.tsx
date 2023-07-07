import type { Meta, StoryObj } from '@storybook/react';

import SportsTennisOutlined from '../../lib/social/SportsTennisOutlined';

const meta: Meta<typeof SportsTennisOutlined> = {
  component: SportsTennisOutlined,
  tags: ['autodocs'],
  title: 'social/SportsTennisOutlined',
};

export default meta;
type Story = StoryObj<typeof SportsTennisOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
