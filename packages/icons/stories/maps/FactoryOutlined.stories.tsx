import type { Meta, StoryObj } from '@storybook/react';

import FactoryOutlined from '../../lib/maps/FactoryOutlined';

const meta: Meta<typeof FactoryOutlined> = {
  component: FactoryOutlined,
  tags: ['autodocs'],
  title: 'maps/FactoryOutlined',
};

export default meta;
type Story = StoryObj<typeof FactoryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
