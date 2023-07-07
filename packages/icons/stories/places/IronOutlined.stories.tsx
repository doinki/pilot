import type { Meta, StoryObj } from '@storybook/react';

import IronOutlined from '../../lib/places/IronOutlined';

const meta: Meta<typeof IronOutlined> = {
  component: IronOutlined,
  tags: ['autodocs'],
  title: 'places/IronOutlined',
};

export default meta;
type Story = StoryObj<typeof IronOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
