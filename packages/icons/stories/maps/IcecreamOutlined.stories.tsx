import type { Meta, StoryObj } from '@storybook/react';

import IcecreamOutlined from '../../lib/maps/IcecreamOutlined';

const meta: Meta<typeof IcecreamOutlined> = {
  component: IcecreamOutlined,
  tags: ['autodocs'],
  title: 'maps/IcecreamOutlined',
};

export default meta;
type Story = StoryObj<typeof IcecreamOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
