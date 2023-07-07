import type { Meta, StoryObj } from '@storybook/react';

import FireHydrantAltOutlined from '../../lib/maps/FireHydrantAltOutlined';

const meta: Meta<typeof FireHydrantAltOutlined> = {
  component: FireHydrantAltOutlined,
  tags: ['autodocs'],
  title: 'maps/FireHydrantAltOutlined',
};

export default meta;
type Story = StoryObj<typeof FireHydrantAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
