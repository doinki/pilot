import type { Meta, StoryObj } from '@storybook/react';

import SoapOutlined from '../../lib/places/SoapOutlined';

const meta: Meta<typeof SoapOutlined> = {
  component: SoapOutlined,
  tags: ['autodocs'],
  title: 'places/SoapOutlined',
};

export default meta;
type Story = StoryObj<typeof SoapOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
